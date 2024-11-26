const employees = [
    {
      "Id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "name": "Gaurav",
      "taskCount": {
        "active": 2,
        "completed": 2,
        "newTask": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskId": 101,
          "taskTitle": "Complete Monthly Report",
          "taskDescription": "Prepare and submit the monthly financial report.",
          "taskDate": "2024-11-20",
          "category": "Finance",
          "active": true,
          "newTask": true,
          "assign": null,
          "failed": false,
          "completed": false
        },
        {
          "taskId": 102,
          "taskTitle": "Team Meeting Preparation",
          "taskDescription": "Create an agenda and presentation slides for the team meeting.",
          "taskDate": "2024-11-22",
          "category": "Management",
          "active": false,
          "newTask": false,
          "assign": null,
          "failed": false
        }
      ]
    },
    {
      "Id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "name": "Sneha",
      "taskCount": {
        "active": 0,
        "completed": 5,
        "newTask": 3,
        "failed": 1
      },
      "tasks": [
        
        {
          "taskId": 202,
          "taskTitle": "System Bug Fix",
          "taskDescription": "Investigate and resolve reported bug in the login module.",
          "taskDate": "2024-11-19",
          "category": "Development",
          "active": true,
          "newTask": false,
          "assign": null,
          "failed": true
        },
        {
          "taskId": 203,
          "taskTitle": "Update Documentation",
          "taskDescription": "Revise the user manual for the latest software release.",
          "taskDate": "2024-11-24",
          "category": "Technical Writing",
          "active": false,
          "newTask": true,
          "assign": null,
          "failed": false
        }
      ]
    },
    {
      "Id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "name": "Pavan",
      "taskCount": {
        "active": 1,
        "completed": 0,
        "newTask": 0,
        "failed": 2
      },
      "tasks": [
        {
          "taskId": 301,
          "taskTitle": "Prepare Sales Report",
          "taskDescription": "Analyze sales data and prepare a comprehensive report.",
          "taskDate": "2024-11-18",
          "category": "Sales",
          "active": true,
          "newTask": true,
          "assign": null,
          "failed": false
        },
        {
          "taskId": 302,
          "taskTitle": "Organize Workshop",
          "taskDescription": "Plan and execute a training workshop for new employees.",
          "taskDate": "2024-11-25",
          "category": "Training",
          "active": false,
          "newTask": true,
          "assign": null,
          "failed": false
        }
      ]
    },
    {
      "Id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "name": "Abhishek","taskCount": {
        "active": 0,
        "completed": 6,
        "newTask": 3,
        "failed": 4
      },
      "tasks": [
        {
          "taskId": 401,
          "taskTitle": "Marketing Campaign Analysis",
          "taskDescription": "Review and assess the performance of the recent ad campaign.",
          "taskDate": "2024-11-30",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "assign": null,
          "failed": true
        },
        {
          "taskId": 402,
          "taskTitle": "Develop Dashboard",
          "taskDescription": "Create a dashboard to visualize key metrics for executives.",
          "taskDate": "2024-12-01",
          "category": "Development",
          "active": true,
          "assign": null,
          "newTask": true,
          "failed": false
        }
      ]
    },
    {
      "Id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "name": "Rahul",
      "taskCount": {
        "active": 1,
        "completed": 0,
        "newTask": 3,
        "failed": 1
      },
      "tasks": [
        {
          "taskId": 501,
          "taskTitle": "Inventory Management",
          "taskDescription": "Audit and organize warehouse inventory.",
          "taskDate": "2024-11-23",
          "category": "Logistics",
          "active": true,
          "newTask": true,
          "failed": false,
          "assign": null
        },
        {
          "taskId": 502,
          "taskTitle": "Client Feedback Collection",
          "taskDescription": "Collect and summarize feedback from key clients.",
          "taskDate": "2024-11-26",
          "category": "Customer Support",
          "active": false,
          "newTask": false,
          "assign": null,
          "failed": true
        },
        {
          "taskId": 503,
          "taskTitle": "Social Media Updates",
          "taskDescription": "Post updates on the company’s social media channels.",
          "taskDate": "2024-11-17",
          "category": "Marketing",
          "active": true,
          "assign": null,
          "newTask": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [{
    "Id": 1,
    "email": "admin@example.com",
    "password": "123",
    "name": "Akash"
  }
]

  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }