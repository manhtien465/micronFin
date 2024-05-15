# Use official Node.js image as the base image
FROM node:20.11.0

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json yarn.lock ./
# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN  yarn build

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js app
CMD ["yarn", "start"]
