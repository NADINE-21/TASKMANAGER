import React from 'react';
import Progress from '../layouts/Progress';
import AvatarGroup from '../layouts/AvatarGroup';
import { LuPaperclip } from 'react-icons/lu';
import moment from 'moment';

const TaskCard = ({
  title,
  description,
  priority,
  status,
  progress,
  createdAT,
  dueDate,
  assignedTo,
  attachmentCount,
  completedTodoCount,
  todoChecklist,
  onClick,
}) => {
  const getStatusTagColor = () => {
    switch (status) {
      case 'In Progress':
        return 'text-cyan-500 bg-cyan-50 border border-cyan-500/10';
      case 'Completed':
        return 'text-lime-500 bg-lime-50 border border-lime-500/20';
      default:
        return 'text-violet-500 bg-violet-50 border border-violet-500/10';
    }
  };

  const getPriorityTagColor = () => {
    switch (priority) {
      case 'Low':
        return 'text-emerald-500 bg-emerald-50 border border-emerald-500/10';
      case 'Medium':
        return 'text-amber-500 bg-amber-50 border border-amber-500/10';
      default:
        return 'text-rose-500 bg-rose-50 border border-rose-500/10';
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200/60 p-4 hover:shadow-md transition cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      {/* Status and Priority */}
      <div className="flex justify-between items-center mb-3">
        <span className={`text-xs font-semibold px-3 py-1 rounded ${getStatusTagColor()}`}>
          {status}
        </span>
        <span className={`text-xs font-semibold px-3 py-1 rounded ${getPriorityTagColor()}`}>
          {priority} Priority
        </span>
      </div>

      {/* Title and Description */}
      <div className="border-l-4 pl-4 mb-4"
        style={{
          borderColor:
            status === 'In Progress'
              ? '#06b6d4'
              : status === 'Completed'
              ? '#6366f1'
              : '#8b5cf6',
        }}
      >
        <h3 className="text-md font-semibold text-gray-800 mb-1 line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
      </div>

      {/* Task Progress */}
      <div className="mb-3">
        <p className="text-sm font-medium text-gray-700 mb-1">
          Task Done: <span className="font-semibold">{completedTodoCount} / {todoChecklist.length || 0}</span>
        </p>
        <Progress progress={progress} status={status} />
      </div>

      {/* Dates */}
      <div className="flex justify-between text-xs text-gray-600 mb-3">
        <div>
          <p className="text-gray-500">Start Date</p>
          <p className="text-[13px] font-medium text-gray-900">
            {moment(createdAT).format('Do MMM YYYY')}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Due Date</p>
          <p className="text-[13px] font-medium text-gray-900">
            {moment(dueDate).format('Do MMM YYYY')}
          </p>
        </div>
      </div>

      {/* Footer: Avatar & Attachment */}
      <div className="mt-auto flex items-center justify-between">
        <AvatarGroup avatars={assignedTo || []} />
        {attachmentCount > 0 && (
          <div className="flex items-center gap-2 bg-blue-50 px-2.5 py-1.5 rounded-lg text-blue-600 text-xs">
            <LuPaperclip className="w-4 h-4" />
            <span>{attachmentCount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
