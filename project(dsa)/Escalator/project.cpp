#include<iostream>
#include<string>
using namespace std;

class Bank {
    // Private variables (Data Hiding)
    int acno;
    string name;
    float bal;

public:
    // Account open karva mate function
    void openAccount() {
        cout << "Enter Account No: ";
        cin >> acno;
        cout << "Enter Name: ";
        cin >> name;
        cout << "Enter Opening Balance: ";
        cin >> bal;
        cout << "Account Created Successfully!\n";
    }

    // Paisa jama karva mate
    void deposit() {
        float amount;
        cout << "Enter Amount to Deposit: ";
        cin >> amount;
        bal = bal + amount;
        cout << "Deposit Successful! New Balance: " << bal << "\n";
    }

    // Paisa upadva mate
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

    // Account ni details jova mate
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
    // Array of Objects banavyo che (Max 10 accounts)
    Bank b[10]; 
    int choice;
    int total = 0; // Ketla account banya che e count karva mate
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
                    total++; // Account count vadharo
                } else {
                    cout << "Bank is Full! Cannot open more accounts.\n";
                }
                break;

            case 2:
                cout << "Enter Account No to Deposit: ";
                cin >> searchAcno;
                found = false;
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
                // Badha account loop feravine batavse
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