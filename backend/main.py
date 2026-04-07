from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="HydroLab Data API")

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data Models
class Member(BaseModel):
    name: str
    role: str
    avatar: str
    color: str
    bio: Optional[str] = None
    email: Optional[str] = None

class LabData(BaseModel):
    title: str
    description: str
    team: List[Member]

# Mock Database / Centralized Data
# In a real app, you would load this from a JSON file or SQL database
LAB_DATA = {
    "title": "Advanced Hydrology & Climate Research Lab",
    "description": "Pioneering research in hydrological modelling...",
    "team": [
        {
            "name": "Engr. Nuaman Ejaz",
            "role": "Lead Researcher & Lab Owner",
            "avatar": "NE",
            "color": "from-hydro-500 to-teal-500",
            "bio": "Expert in advanced hydrological modelling...",
            "email": "nuaman.ejaz@research.edu"
        },
        # Add other members here...
    ]
}

@app.get("/")
def read_root():
    return {"status": "HydroLab API is running"}

@app.get("/api/data")
def get_lab_data():
    """
    Returns the centralized lab data.
    The React frontend would call this endpoint to populate the site dynamically.
    """
    return LAB_DATA

@app.post("/api/contact")
def handle_contact(message: dict):
    """
    Example endpoint to handle contact form submissions.
    """
    print(f"Received message from: {message.get('email')}")
    return {"status": "Message received", "id": 12345}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
