import React from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                🎉 Great! You’ve completed {completedTasksCount} tasks.
                {activeTasksCount > 0 &&
                  `, only ${activeTasksCount} tasks left. Keep it up!`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Let’s start working on {activeTasksCount} tasks!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
