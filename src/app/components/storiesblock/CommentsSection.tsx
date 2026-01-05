'use client';

import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  body: string;
  is_liked_by_author: boolean;
  user: { name: string; avatar?: string };
  replies?: Comment[];
}

export default function StoryComments({ storyId }: { storyId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');
  const [showAll, setShowAll] = useState(false);

  // 1. Fetch Comments
  useEffect(() => {
    fetch(`https://api11.storiesvale.com/api/stories/${storyId}/comments`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [storyId]);

  // 2. Submit Main Comment
  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    const res = await fetch(`https://api11.storiesvale.com/api/stories/${storyId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: newComment })
    });
    if (res.ok) {
      const savedComment = await res.json();
      setComments([savedComment, ...comments]);
      setNewComment('');
    }
  };

  // 3. Submit Reply
  const handleReply = async (parentId: number) => {
    if (!replyText.trim()) return;
    const res = await fetch(`https://api11.storiesvale.com/api/stories/${storyId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: replyText, parent_id: parentId })
    });
    if (res.ok) {
      // Refresh comments to show new reply
      const updated = await fetch(`https://api11.storiesvale.com/api/stories/${storyId}/comments`).then(r => r.json());
      setComments(updated);
      setReplyingTo(null);
      setReplyText('');
    }
  };

  const renderComment = (comment: Comment) => (
    <div key={comment.id} className="relative flex items-start gap-4 border-b border-gray-100 p-5 transition-colors hover:bg-gray-50">
      <img 
        src={comment.user.avatar || '/img/default-avatar.png'} 
        className="w-10 h-10 rounded-full object-cover" 
        alt="avatar" 
      />

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-gray-800 flex items-center gap-2">
            {comment.user.name}
            {comment.is_liked_by_author && (
              <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded">
                Liked by Author
              </span>
            )}
          </h4>
        </div>

        <p className="text-gray-700 mt-1">{comment.body}</p>

        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
          <button className="hover:text-yellow-600 font-medium">Like</button>
          <button 
            onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
            className="hover:text-indigo-600 font-medium"
          >
            Reply
          </button>
        </div>

        {/* Reply Input */}
        {replyingTo === comment.id && (
          <div className="mt-3">
            <textarea 
              className="w-full border rounded-lg p-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => setReplyingTo(null)} className="text-xs text-gray-500">Cancel</button>
              <button onClick={() => handleReply(comment.id)} className="text-xs bg-blue-600 text-white px-3 py-1 rounded">Post</button>
            </div>
          </div>
        )}

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 ml-4 pl-4 border-l-2 border-gray-100 space-y-4">
            {comment.replies.map(renderComment)}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto mt-20 mb-20 px-4">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Comments ({comments.length})</h3>

      {/* Main Post Input */}
      <div className="mb-10 flex gap-4">
        <textarea
          className="flex-1 border border-gray-300 rounded-xl p-4 text-gray-800 outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="What are your thoughts on this story?"
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button 
          onClick={handleSubmit}
          className="self-end bg-[#1d2f49] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Post
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {comments.slice(0, showAll ? comments.length : 3).map(renderComment)}
      </div>

      {!showAll && comments.length > 3 && (
        <button 
          onClick={() => setShowAll(true)}
          className="mt-6 w-full py-3 bg-gray-50 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition"
        >
          View all {comments.length} comments
        </button>
      )}
    </div>
  );
}