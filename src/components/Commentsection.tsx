"use client"

import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
  likes: number;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: 'Great post!', likes: 0 },
    { id: 2, text: 'Very informative, thanks!', likes: 0 },
  ]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj: Comment = {
      id: Date.now(),
      text: newComment,
      likes: 0,
    };
    setComments((prev) => [newCommentObj, ...prev]);
    setNewComment('');
  };

  const handleLikeComment = (id: number) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-6 p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      
      {/* Comment Input */}
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Post Comment
        </button>
      </div>
      
      {/* Comments List */}
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4 p-4 border-b">
            <p>{comment.text}</p>
            <div className="flex items-center space-x-4 mt-2">
              <button
                onClick={() => handleLikeComment(comment.id)}
                className="text-sm text-blue-600 hover:underline"
              >
                Like ({comment.likes})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
