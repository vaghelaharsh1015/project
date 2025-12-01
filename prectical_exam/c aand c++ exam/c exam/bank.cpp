#include <iostream>
#include <stdio.h>

using namespace std;

int main()
{
  char name[20];
  int Ac, balance;

  cout << "enter your name : ";
  cin >> name;

  cout << "enter your ac : ";
  cin >> Ac;

  cout << "enter your balance :";
  cin >> balance;

  cout << "\n--- Account Details ---\n";
  cout << "Name: " << name << endl;
  cout << "Account Number: " << Ac << endl;
  cout << "Your bank total amount is: " << balance << endl;

  return 0;
}
