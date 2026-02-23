#include <iostream>
using namespace std;

// Define the Node structure
struct Node {
    int data;
    Node* next;

    Node(int val) {          // the Node class
        data = val;          // val give thise data to data
        next = NULL;         // Initialize next pointer as NULL
    }
};

class LinkedList {
public:
    Node* head;

    // Constructor to set head to NULL
    LinkedList() {
        head = NULL;
    }

    // 1. Method to insert data at the beginning
    void insertStart(int val) {
        Node* newNode = new Node();
        newNode->data = val;
        newNode->next = head;
        head = newNode;
    }

    // 2. Method to display the linked list
    void display() {
        Node* temp = head;
        while (temp != NULL) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }

    // 3. Method to search for a value
    void search(int key) {
        Node* temp = head;
        while (temp != NULL) {
            if (temp->data == key) {
                cout << "Value " << key << " found in list." << endl;
                return;
            }
            temp = temp->next;
        }
        cout << "Value " << key << " not found." << endl;
    }

    // 4. Method to delete a node by value
    void deleteNode(int key) {
        Node *temp = head, *prev = NULL;

        // If head node itself holds the key
        if (temp != NULL && temp->data == key) {
            head = temp->next;
            delete temp;
            return;
        }

        // Search for the key to be deleted
        while (temp != NULL && temp->data != key) {
            prev = temp;
            temp = temp->next;
        }

        // If key was not present in list
        if (temp == NULL) return;

        // Unlink the node from linked list
        prev->next = temp->next;
        delete temp;
    }

    // 5. Method to reverse the list
    void reverse() {
        Node *prev = NULL, *curr = head, *next = NULL;
        while (curr != NULL) {
            next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        head = prev;
    }
};

int main() {
    LinkedList list;

    // Adding data
    list.insertStart(30);
    list.insertStart(20);
    list.insertStart(10);

    cout << "Current List: ";
    list.display();

    // Searching for a value
    list.search(20);

    // Reversing the list
    list.reverse();
    cout << "Reversed List: ";
    list.display();

    // Deleting a value
    list.deleteNode(20);
    cout << "After Deleting 20: ";
    list.display();

    return 0;
}