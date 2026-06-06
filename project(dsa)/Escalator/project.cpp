#include<iostream>
#include<string>
using namespace std;

class Bank {
    // Account details
    int acno;
    string name;
    float bal;

public:
    // Function to open a new account
    void openAccount() {
        cout << "Enter Account No: ";
        cin >> acno;
        cout << "Enter Name: ";
        cin >> name;
        cout << "Enter Opening Balance: ";
        cin >> bal;
        cout << "Account Created Successfully!\n";
    }

    // Function to deposit money
    void deposit() {
        float amount;
        cout << "Enter Amount to Deposit: ";
        cin >> amount;
        bal = bal + amount;
        cout << "Deposit Successful! New Balance: " << bal << "\n";
    }

    // Function to withdraw money
    void withdraw() {
        float amount;
        cout << "Enter Amount to Withdraw: ";
        cin >> amount;
        if(amount > bal) {
            cout << "Error: Not enough balance!\n";
        } else {
            bal = bal - amount;
            cout << "Withdraw Successful! Remaining Balance: " << bal << "\n";
        }
    }

    // Display account details
    void showAccount() {
        cout << "\nAccount No: " << acno;
        cout << "\nName: " << name;
        cout << "\nBalance: " << bal << "\n";
        cout << "---------------------------\n";
    }

   
    int getAcno() {
        return acno;
    }
};

int main() {
    Bank b[10]; // Array to store up to 10 accounts
    int choice;
    int total = 0; // Keeps track of total accounts created
    int searchAcno;
    bool found;

    do {
        cout << "\n--- BANK SYSTEM ---\n";
        cout << "1. Open Account\n";
        cout << "2. Deposit\n";
        cout << "3. Withdraw\n";
        cout << "4. Show All Accounts\n";
        cout << "5. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch(choice) {
            case 1:
                if(total < 10) {
                    b[total].openAccount();
                    total++; 
                } else {
                    cout << "Bank is Full! Cannot open more accounts.\n";
                }
                break;

            case 2:
                cout << "Enter Account No to Deposit: ";
                cin >> searchAcno;
                found = false;
                
                // Search for the account
                for(int i=0; i<total; i++) {
                    if(b[i].getAcno() == searchAcno) {
                        b[i].deposit();
                        found = true;
                        break;
                    }
                }
                if(!found) cout << "Account not found!\n";
                break;
               
            case 3:
                cout << "Enter Account No to Withdraw: ";
                cin >> searchAcno;
                found = false;
                
                // Search for the account
                for(int i=0; i<total; i++) {
                    if(b[i].getAcno() == searchAcno) {
                        b[i].withdraw();
                        found = true;
                        break;
                    }
                }
                if(!found) cout << "Account not found!\n";
                break;

            case 4:
                // Show all created accounts
                for(int i=0; i<total; i++) {
                    b[i].showAccount();
                }
                break;

            case 5:
                cout << "Bye Bye!\n";
                break;

            default:
                cout << "Wrong Choice!\n";
        }
    } while(choice != 5);
    return 0;
} 