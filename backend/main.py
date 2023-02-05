from typing import Optional
from pymongo import MongoClient
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId
from pydantic import BaseModel


class Blog(BaseModel):
    title: str
    content: str
    author: str
    upvotes: Optional[int] = 0
    downvotes: Optional[int] = 0


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient(
    "mongodb+srv://user:userpassword@cluster0.gkcvp.mongodb.net/?retryWrites=true&w=majority")
db = client["assignmentdb"]
blogs = db["blogs"]


@app.post("/add_blog")
async def add_blog(data: Blog):
    try:
        print(data)
        blogs.insert_one(data.dict())
        return {"message": "Blog added successfully"}
    except:
        raise HTTPException(status_code=500, detail="Could not add blog")


@app.get("/fetch_blogs")
async def fetch_blogs():
    try:
        blogs_data = []
        for blog in blogs.find():
            blogs_data.append({"title": blog["title"], "content": blog["content"], "author": blog["author"],
                               "upvotes": blog["upvotes"], "downvotes": blog["downvotes"], "id": str(blog["_id"])})
        return blogs_data
    except:
        raise HTTPException(status_code=500, detail="Could not fetch blogs")


@app.get("/fetch_blog/{blog_id}")
async def fetch_blog(blog_id: str):
    try:
        blog = blogs.find_one({"_id": ObjectId(blog_id)})
        print(blog["title"])
        return {"title": blog["title"], "content": blog["content"], "author": blog["author"],
                "upvotes": blog["upvotes"], "downvotes": blog["downvotes"]}
    except:
        raise HTTPException(status_code=500, detail="Could not fetch blog")
