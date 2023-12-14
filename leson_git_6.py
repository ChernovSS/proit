import os
from datetime import datetime


def create_and_update_file(file_name):
    current_datetime = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    if not os.path.exists(file_name):
        with open(file_name, 'w') as file:
            file.write(f"[{current_datetime}] - File created.\n")
    else:
        with open(file_name, 'a') as file:
            file.write(f"[{current_datetime}] - File editing.\n")
    file.close()

    with open(file_name, 'r') as file:
        file_content = file.read()
        print(f"Вміст файлу '{file_name}':\n{file_content}")

if __name__ == '__main__':
    create_and_update_file('example.txt');
    create_and_update_file('example.txt');
    create_and_update_file('example.txt');