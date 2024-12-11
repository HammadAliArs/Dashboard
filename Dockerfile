# Step 1: Use an official Node.js image to build the app
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Install a simple static server to serve the build folder
RUN npm install -g serve

# Step 8: Expose port 3000 for the app to be accessible
EXPOSE 3000

# Step 9: Serve the React app using the serve package
CMD ["serve", "-s", "build", "-l", "3000"]
