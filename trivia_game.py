import random



questions = {
"What is the keyword used to define a function in Python?": "def",
"What is the data type of the value 5?": "int",
"What is the operator used for exponentiation in Python?": "**",
"What is the method used to remove the last element from a list?": "pop",
"What is the built-in function used to get the length of a string?": "len",
"What is the keyword used to indicate a block of code belongs to a control structure?": "indent",
}

def trivia_game():
    question_list = list(questions.keys())
    total_questions = 3
    score = 0

    selected_questions = random.sample(question_list, total_questions)

    for idx, question in enumerate(selected_questions):
        print(f"{idx + 1}. {question}")
        user_answer = input("Your answer: ").lower().strip()
        correct_answer = questions[question]

        if user_answer == correct_answer.lower():
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong! The correct answer is {correct_answer}.\n")

    print(f"The end. You've got {score} out of {total_questions} questions.")


trivia_game()