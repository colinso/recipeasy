# recipeasy

- Find an LLM API to use
    - Find a cheaper way to do this
        - Find a small model to run on my PC or in AWS
        - Use AWS SageMaker
- Run it in a lambda
    - Use a lambda function URL
    - Terraform it if there's time
    - Make sure to set up security so that not just anyone can hit it
- Set up storage/caching
    - Can save money if multiple people want the same recipe and it's already in the DB
        -  Doesn't allow for recipes to be edited, but that's a tomorrow problem

## Data Models

recipe
- id
- url
- name
- author
- prep_time
- cook_time
- total_time
- servings
- ingredients (array)
- sub_ingredients (array of objects)
    - name
    - ingredients
- instructions (array)

user
- id
- name

user_recipe
- user_id
- recipe_id