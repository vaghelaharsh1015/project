#include <iostream>
#include <vector>
#include <string>

using namespace std;

template <typename T>
class Student {
public:
    T id;
    string name;

    Student(T i, string n) : id(i), name(n) {}

    void display() {
        cout << "ID: " << id << " | Name: " << name << endl;
    }
};

int main() {
    vector<Student<int>> students;
    int choice, id;
    string name;

    while (true) {
        cout << "\n--- Student Management System ---" << endl;
        cout << "1. Add 2. Display 3. Remove 4. Search 0. Exit: ";
        cin >> choice;

        if (choice == 0) break;

        if (choice == 1) {
            cout << "Enter ID & Name: ";
            cin >> id >> name;
            students.push_back(Student<int>(id, name));
            cout << "Student Added!" << endl;
        } 
        else if (choice == 2) {
            if (students.empty()) cout << "List is empty!" << endl;
            for (auto &s : students) s.display();
        } 
        else if (choice == 3) {
            cout << "Enter ID to remove: ";
            cin >> id;
            bool deleted = false; // Flag to check if deleted
            for (auto it = students.begin(); it != students.end(); ++it) {
                if (it->id == id) {
                    students.erase(it);
                    cout << "Student Removed." << endl;
                    deleted = true;
                    break;
                }
            }
            if (!deleted) cout << "Error: ID " << id << " not found!" << endl;
        } 
        else if (choice == 4) {
            cout << "Enter ID to search: ";
            cin >> id;
            bool found = false; // Flag to check if found
            for (auto &s : students) {
                if (s.id == id) {
                    cout << "Result: ";
                    s.display();
                    found = true;
                    break;
                }
            }
            if (!found) cout << "Error: ID " << id << " not found!" << endl;
        }
    }
    return 0;
}