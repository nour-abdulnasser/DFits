# D'Fits

## Overview

This is an Angular application designed to list products in an accessible, clean, user-friendly interface. The project demonstrates features such as search pipes and data fetching from an API.

## Approach

### 1. **Architecture**

- The application is built using Angular's latest standalone component-based architecture, ensuring modularity, scalability and ease of maintenance.
- Key components include:
  - `HomeComponent`: Products are listed in categorical groups.
  - `NavComponent`: Contains an interactive logo, a menu button, and options for cart and search functionalities.
  - `FooterComponent`: Contains links, logo and trademark.

### 2. **Data Handling**

- The application retrieves data from https://fakestoreapi.com, using Angular's `HttpClient` imported in the service and the component, and `provideHttpCLient()` provided in `appConfig` to handle asynchronous HTTP requests.

### 3. **UI/UX**

- The user interface was designed using Bootstrap CSS Framework, Fontawesome for icons, and ngx-spinner for the loading UI, which ensures a clean, responsive, and user-friendly interface.
- Each element has a corresponding title to ensure accessibility and adhere to SEO principles.

## Challenges

Some of the challenges faced during the development of this project were:

- **Grouping products**:
  - Challenges:
    1. The API route `{GET} /categories` only views the category names.
       The API includes a separate route to get products of a specific category. **This means relying on the API to fetch products categorically requires time proportional to the number of categories and the products in each category.**
    2. TypeScript doesn't have a built-in `Object.groupBy()`.
  - Solution:
    1.  One API request is sent to get all products.
    2.  The grouping functionality was implemented on all products using `Map` to store key-value pairs.
- **Styling**:
  - Challenges:
    1. Cards having different heights.
    2. Employing empty stars.
  - Solution:
    1.  Bootstrap v5.3.3 Grid and flexbox is used, where each card is given `.h-100`.
    2. Structural directives are used along with mathematical logic to list the stars and ensure the rating has visible context. 
- **Deployment**:
  -Challenges:
    1. Local folder name has a different name to the remote repository, which led to unexpected behaviour.
  - Solution:
    1. Unpublish and unsave previous deployment.
    2. ```bash 
        npm install -g angular-cli-ghpages
        ```
    3. Check build options (baseHref is the name of the GitHub repository):  
       ```bash
       "outputPath": "dist",
        "baseHref": "/DFits/",
    ```
    4. `ng deploy`

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

## Conclusion

This project demonstrates a simple e-mart that lists products. Despite the challenges, the final result is a functional and scalable application that can be extended further with additional features.

