import React from 'react';

const UserCard = ({ userInfo }) => {
  const profileImage = userInfo?.profileImageUrl?.trim();

  return (
    <div className="user-card p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Header: Avatar + Name/Email */}
      <div className="flex items-center gap-4">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Avatar"
            className="w-14 h-14 rounded-full border-2 border-white shadow"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium shadow">
            N/A
          </div>
        )}

        <div>
          <p className="text-base font-semibold text-gray-800">
            {userInfo?.name || 'Unnamed'}
          </p>
          <p className="text-sm text-gray-500">{userInfo?.email || 'No email'}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 mt-5">
        <StatCard
          label="Pending"
          count={userInfo?.pendingTasks || 0}
          status="Pending"
        />
        <StatCard
          label="In Progress"
          count={userInfo?.inProgressTasks || 0}
          status="In Progress"
        />
        <StatCard
          label="Completed"
          count={userInfo?.completedTasks || 0}
          status="Completed"
        />
      </div>
    </div>
  );
};

export default UserCard;



const StatCard = ({ label, count, status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'In Progress':
        return 'bg-cyan-50 text-cyan-700 border border-cyan-100';
      case 'Completed':
        return 'bg-indigo-50 text-indigo-700 border border-indigo-100';
      case 'Pending':
      default:
        return 'bg-violet-50 text-violet-700 border border-violet-100';
    }
  };

  return (
    <div
      className={`flex-1 p-3 rounded-lg ${getStatusStyles()} text-center text-sm font-medium shadow-sm`}
    >
      <div className="text-lg font-bold">{count}</div>
      <div className="text-xs mt-1">{label}</div>
    </div>
  );
};
