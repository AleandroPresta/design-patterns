# Flyweight Design Pattern

The Flyweight design pattern is a structural pattern that focuses on optimizing memory usage by sharing a common state among multiple objects. It aims to reduce the number of objects created and to decrease memory footprint, particularly useful when dealing with a large number of similar objects.

## Table of Contents

-   [Components of Flyweight Design Pattern](#components-of-flyweight-design-pattern)
-   [Implementation](#implementation)

## Components of Flyweight Design Pattern

The Flyweight design pattern typically consists of the following components:

1. **Flyweight Interface/Class**:
    - Defines the interface through which flyweight objects can receive and act on extrinsic state.
2. **Concrete Flyweight Classes**:
    - Implements the Flyweight interface and represents objects that can be shared.
    - Stores intrinsic state (state that can be shared) and provides methods to manipulate intrinsic state if needed.
3. **Flyweight Factory**:
    - Manages a pool of flyweight objects.
    - Provides methods for clients to retrieve or create flyweight objects.
    - Ensures flyweight objects are shared appropriately to maximize reusability.
4. **Client**:
    - Uses flyweight objects to perform operations.
    - Maintains or passes extrinsic state to flyweight objects when needed.
    - Does not manage the lifecycle of flyweight objects directly but interacts with them via the factory.

## Implementation

![alt text](uml.png)

1. **Flyweight Interface**:

    ```java
    // Flyweight interface
    public interface Icon {
        void draw(int x, int y);  // Method to draw the icon at given coordinates
    }
    ```

2. **Concrete Flyweight Classes**

    ```java
    // Concrete Flyweight class representing a File Icon
    public class FileIcon implements Icon {
        private String type;  // Intrinsic state: type of file icon (e.g., document, image)
        private Image image;  // Intrinsic state: image specific to the file icon

        public FileIcon(String type, Image image) {
            this.type = type;
            this.image = image;
        }

        @Override
        public void draw(int x, int y) {
            // Draw logic specific to file icon using intrinsic state (image)
            System.out.println("Drawing " + type + " icon at position (" + x + ", " + y + ")");
        }
    }

    // Concrete Flyweight class representing a Folder Icon
    public class FolderIcon implements Icon {
        private String color;  // Intrinsic state: color of the folder icon
        private Image image;   // Intrinsic state: image specific to the folder icon

        public FolderIcon(String color, Image image) {
            this.color = color;
            this.image = image;
        }

        @Override
        public void draw(int x, int y) {
            // Draw logic specific to folder icon using intrinsic state (image)
            System.out.println("Drawing folder icon with color " + color + " at position (" + x + ", " + y + ")");
        }
    }
    ```

3. **Flyweight Factory**

    ```java
    import java.util.HashMap;
    import java.util.Map;

    // Flyweight factory to manage creation and retrieval of flyweight objects
    public class IconFactory {
        private Map<String, Icon> iconCache = new HashMap<>();

        public Icon getIcon(String key) {
            // Check if the icon already exists in the cache
            if (iconCache.containsKey(key)) {
                return iconCache.get(key);
            } else {
                // Create a new icon based on the key (type of icon)
                Icon icon;
                if (key.equals("file")) {
                    icon = new FileIcon("document", loadImage("document.png"));
                } else if (key.equals("folder")) {
                    icon = new FolderIcon("blue", loadImage("folder.png"));
                } else {
                    throw new IllegalArgumentException("Unsupported icon type: " + key);
                }
                // Store the created icon in the cache
                iconCache.put(key, icon);
                return icon;
            }
        }

        // Simulated method to load image based on filename
        private Image loadImage(String filename) {
            // Load image from file system or resource
            // Here, returning a dummy Image object
            return new Image(filename);
        }
    }
    ```

4. **Client**

    ```java
    // Client code to use the flyweight objects (icons)
    public class Client {
        public static void main(String[] args) {
            IconFactory iconFactory = new IconFactory();

            // Draw file icons at different positions
            Icon fileIcon1 = iconFactory.getIcon("file");
            fileIcon1.draw(100, 100);

            Icon fileIcon2 = iconFactory.getIcon("file");
            fileIcon2.draw(150, 150);

            // Draw folder icons at different positions
            Icon folderIcon1 = iconFactory.getIcon("folder");
            folderIcon1.draw(200, 200);

            Icon folderIcon2 = iconFactory.getIcon("folder");
            folderIcon2.draw(250, 250);
        }
    }
    ```
