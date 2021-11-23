# Learning-Studio(on-going)

### Overview
Learning-studio is e-learning application which has four important modules, Admin, Student, course, lectures. where admin has all the right to manage student and course details. where as student can only access the course once the login is authenticated.

### Description
* Admin
   - Admin Authentication is performed.
   - Admin can only Edit his/her account details.
   - Admin is authorised to register student to academy.
   - Can manage Students like Add, Edit, remove students in to academy.
   - can manage Course details like Add, Edit, remove lectures.
* Student
  - Student Authentication is performed based on login details provided by admin
  - can view courses which they have enrolled.

  ### Dependencies (used so far)
  - react-redux `npm install react-redux`
  - react-router-dom `npm install react-router-dom`
  - redux `npm install redux`
  - redux-thunk `npm install redux-thunk`
  - validator `npm install validator`
  - axios `npm install axios`
  - sweetalert `npm install sweetalert`