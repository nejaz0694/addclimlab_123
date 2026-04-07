import json
import os
import re

# Path to the data file
DATA_FILE = r'c:\Users\Administrator\.gemini\antigravity\playground\inertial-lagoon\src\data\labData.js'

def read_data():
    if not os.path.exists(DATA_FILE):
        print("Data file not found!")
        return None
    
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to extract the object assigned to labData
    # Note: This expects the structure to be 'export const labData = { ... };'
    match = re.search(r'export const labData = (\{.*\});', content, re.DOTALL)
    if not match:
        # Fallback for if the semicolon is missing or something else
        match = re.search(r'export const labData = (\{.*\})', content, re.DOTALL)
        
    if match:
        # This is JS, not pure JSON. For a robust solution, we'd use a JS parser, 
        # but for simple edits, we can try to treat it as JSON if it's clean,
        # or just work with the string.
        # Since it has unquoted keys and single quotes, we'll use a safer approach for this specific labData.
        return content
    return None

def write_data(new_content):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)

def add_blog_post(title, excerpt, content_text, color="bg-hydro-500"):
    content = read_data()
    if not content: return
    
    import datetime
    date_str = datetime.datetime.now().strftime("%B %d, %Y")
    
    # Find the end of the blog array
    blog_pattern = r'blog:\s*\[(.*?)\s*\]'
    match = re.search(blog_pattern, content, re.DOTALL)
    
    if match:
        current_blogs = match.group(1).strip()
        # Create new entry string
        new_entry = f"""    ,{{
      id: {current_blogs.count('id:') + 1},
      title: "{title}",
      date: "{date_str}",
      excerpt: "{excerpt}",
      content: "{content_text}",
      color: "{color}"
    }}"""
        updated_blogs = current_blogs + "\n" + new_entry
        new_content = content.replace(current_blogs, updated_blogs)
        write_data(new_content)
        print(f"Added blog post: {title}")

def add_research_project(category, title, description, tags, status="Ongoing", color="badge-blue"):
    content = read_data()
    if not content: return
    
    # Find the end of the projects array
    proj_pattern = r'projects:\s*\[(.*?)\s*\]'
    match = re.search(proj_pattern, content, re.DOTALL)
    
    if match:
        current_projs = match.group(1).strip()
        tags_str = ", ".join([f"'{t}'" for t in tags])
        new_entry = f"""      ,{{
        id: {current_projs.count('id:') + 1},
        category: '{category}',
        title: '{title}',
        description: '{description}',
        tags: [{tags_str}],
        status: '{status}',
        color: '{color}'
      }}"""
        updated_projs = current_projs + "\n" + new_entry
        new_content = content.replace(current_projs, updated_projs)
        write_data(new_content)
        print(f"Added research project: {title}")

if __name__ == "__main__":
    print("--- Hydrology Lab Content Manager ---")
    print("1. Add Blog Post")
    print("2. Add Research Project")
    choice = input("Select an option: ")
    
    if choice == '1':
        t = input("Title: ")
        e = input("Excerpt (short summary): ")
        c = input("Full Content (the story): ")
        add_blog_post(t, e, c)
    elif choice == '2':
        c = input("Category (hydro/climate/ground/drought): ")
        t = input("Title: ")
        d = input("Description: ")
        tags = input("Tags (comma separated): ").split(',')
        add_research_project(c, t, d, [tag.strip() for tag in tags])
    else:
        print("Invalid choice.")
