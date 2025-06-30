+ ### Welcome LogInBanner.jsx 
**Exercise 1: Basic Conditional Rendering**
**Task:**  
Create a component that displays "Welcome, User!" if a user is logged in (`isLoggedIn` is true) and "Please log in" if not.

**Hints:**  
- Use an `if` statement or a ternary operator to conditionally render the text.
- Add a button to toggle the `isLoggedIn` state.

---

+ ### MultipleStatesBanner.jsx
**Exercise 2: Conditional Rendering with Multiple States**
**Task:**  
Build a component that displays:
- "Loading..." if `isLoading` is true.
- "Welcome, User!" if `isLoggedIn` is true and `isLoading` is false.
- "Please log in" if `isLoggedIn` is false and `isLoading` is false.

**Hints:**  
- Use multiple conditions with `if-else` or ternary operators.

---

+ ### RenderElements.jsx
  **Exercise 3: Conditional Rendering with Elements**
**Task:**  
Create a component that displays:
- A "Profile" button if `isLoggedIn` is true.
- A "Log In" button and "Sign Up" button if `isLoggedIn` is false.

**Hints:**  
- Use inline `&&` and `||` operators for rendering specific elements.

---

+ ### RenderDifferent.jsx
**Exercise 4: Rendering Different Components**
**Task:**  
Build a component that displays different child components based on a user role (`userRole`):
- `AdminPanel` component if the role is `admin`.
- `UserDashboard` component if the role is `user`.
- `GuestPage` component if no role is set.

**Hints:**  
- Use `switch-case` or conditional rendering.

---

+ ### DynamicList.jsx
**Exercise 5: Dynamic Lists with Conditional Rendering**
**Task:**  
Display a list of tasks, but:
- Show "No tasks available" if the `tasks` array is empty.
- Render each task in the list if the array has items.

**Hints:**  
- Use `tasks.length` to check if the array is empty.

---

+ ### Notification.jsx
**Exercise 6: Styling Based on Conditions**
**Task:**  
Create a `Notification` component that:
- Displays a green background if `type` is `"success"`.
- Displays a red background if `type` is `"error"`.
- Displays a yellow background if `type` is `"warning"`.

**Hints:**  
- Use inline conditional styles or class names.

---

### **Exercise 7: Controlled Form with Conditional Fields**
**Task:**  
Create a form with conditional fields:
- If `userType` is "student," display a field for "Grade."
- If `userType` is "teacher," display a field for "Subject."

**Hints:**  
- Use `useState` for `userType` and conditionally render the fields.

---

+ ### Modal.jsx
 **Exercise 8: Advanced Component Visibility**
**Task:**  
Create a `Modal` component that:
- Displays when `isOpen` is true.
- Is hidden when `isOpen` is false.

**Hints:**  
- Use conditional rendering to toggle visibility of the modal.

---

### **Exercise 9: Tabs with Conditional Rendering**
**Task:**  
Create a tabbed interface where:
- Clicking on a tab (e.g., "Home," "Profile," "Settings") displays its respective content.
- Only one tab content is visible at a time.

**Hints:**  
- Use `useState` to track the active tab.

---

+ ### FeatureFlags.jsx
 **Exercise 10: Feature Flags**
**Task:**  
Create a component where certain features are rendered based on `featureFlags`:
- Display "New Feature!" only if `featureFlags.newFeature` is true.
- Hide "Deprecated Feature" if `featureFlags.deprecatedFeature` is true.

**Hints:**  
- Use boolean flags stored in an object for feature visibility.

---

