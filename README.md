# D'Fits

## Overview

This is an Angular application designed to list products in an accessible, clean, user-friendly interface. The project demonstrates features such as search pipes and data fetching from an API.

## Approach

### 1. **Architecture**

- The application is built using Angular's latest standalone component-based architecture, ensuring modularity, scalability, and ease of maintenance.
- Key components include:
  - `HomeComponent`: Products are listed in categorical groups.
  - `NavComponent`: Contains an interactive logo, a menu button, and options for cart and search functionalities.
  - `FooterComponent`: Contains links, logo, and trademark.

### 2. **Data Handling**

- The application retrieves data from [Fake Store API](https://fakestoreapi.com), using Angular's `HttpClient`, which is imported in both the service and the component. `provideHttpClient()` is used in `appConfig` to handle asynchronous HTTP requests.

### 3. **UI/UX**

- The user interface was designed using the Bootstrap CSS framework, FontAwesome for icons, and ngx-spinner for loading states, ensuring a clean, responsive, and user-friendly interface.
- Each element has a corresponding title to ensure accessibility and adhere to SEO principles.

---

## Challenges

### 1. **Grouping Products**

**Challenges:**
- The API route `{GET} /categories` only returns category names.
- The API includes a separate route to fetch products by category. This requires additional time proportional to the number of categories and the products in each category.
- TypeScript does not have a built-in `Object.groupBy()`.

**Solution:**
- One API request is sent to get all products.
- The grouping functionality was implemented using `Map` to store key-value pairs for efficient product grouping.

### 2. **Styling**

**Challenges:**
- Cards had varying heights.
- Implementing empty stars for the product rating display.

**Solution:**
- Bootstrap v5.3.3 Grid and flexbox were used, and each card was given the `.h-100` class for uniform height.
- Angular structural directives and mathematical logic were used to dynamically render the stars and provide context for the product ratings.

### 3. **Deployment**

**Challenges:**
- The local folder name differed from the remote repository, which caused unexpected behavior.

**Solution:**
- Unpublished and removed previous deployment.
- Installed the `angular-cli-ghpages` package:

  ```bash
  npm install -g angular-cli-ghpages
  ```

- Checked and updated the build options (`baseHref` is the name of the GitHub repository):

  ```bash
  "outputPath": "dist",
  "baseHref": "/DFits/",
  ```

- Deployed using Angular CLI:

  ```bash
  npx angular-cli-ghpages --dir=dist

  ```

---

## Running the Application Locally

Follow these steps to run the application locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nour-abdulnasser/DFits.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd DFits
   ```

3. **Install dependencies:**

   Ensure that you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed. Then run:

   ```bash
   npm install
   ```

4. **Run the application:**

   Start the Angular development server:

   ```bash
   ng serve
   ```

   The application will be accessible at `http://localhost:4200/`.

5. **Building the project:**

   To build the project for production, run:

   ```bash
   ng build --configuration=production
   ```

---

## Conclusion

This project demonstrates a simple e-mart that lists products. Despite the challenges, the final result is a functional and scalable application that can be extended further with additional features.
