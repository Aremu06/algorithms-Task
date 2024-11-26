# Overview

This project sorts a string by grouping and ordering its characters into specific categories:

- Numbers: Sorted numerically.
- Lowercase Letters: Sorted alphabetically.
- Uppercase Letters: Sorted alphabetically.
- Other Characters: Sorted by their ASCII values.
Each category is processed independently, and the final result combines all sorted groups in this order: numbers, lowercase letters, uppercase letters, and others.


# How to Run

1. Prerequisites:
    - Clone the repo or download and unzip the project in your desired local folder
    - Ensure you have Node.js installed on your system.
2. Steps:
    - Save the script to a file, e.g., alphanumeric-sort.js.
    - Open a terminal in the directory where the file is located.
    - Run the script with the following command, replacing "string_to_sort" with your input string:
           ``` node alphanumeric-sort.js "string_to_sort" ```
3. Example :``` node alphanumeric-sort.js "aB3!2C1d" ```

    Output:   
    - Input: aB3!2C1d  
    - Sorted Output: 123adBC!


# Design Decisions and Tradeoffs

1. Categorizing Characters:

    - The input string is divided into groups: numbers, lowercase letters, uppercase letters, and others.
    - Tradeoff: This categorization adds complexity upfront but simplifies the sorting logic and improves code readability.

2. Handling Consecutive Numbers:

    - Consecutive digits are grouped into multi-digit numbers (e.g., "123" is treated as 123).
    - Tradeoff: This approach avoids treating digits as separate numbers but requires additional logic for grouping.

3. Sorting Logic:

    - Each category is sorted separately, allowing flexibility to change how groups are ordered without impacting others.
    - Tradeoff: Sorting individual groups takes additional processing time but makes the code modular and maintainable.

4. String Modification:

    - The input string is processed directly to extract numbers and characters, which reduces redundant operations.
    - Tradeoff: Modifying strings could lead to edge cases, but these are handled through careful implementation.

# Error Handling
- The script validates that the input is a non-empty string.
- If no input is provided, or if the input is invalid, it displays an error message and exits gracefully.
