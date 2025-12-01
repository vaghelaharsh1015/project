#include <stdio.h>

int main()
{

  int rn, cm, pm, mm, total;
  char name[50];
  float pr;

  printf("enter your roll num:\n");
  scanf("%d", &rn);

  printf("enter your name:\n");

  scanf("%s", name);

  printf("enter your cm mark:\n");
  scanf("%d", &cm);

  printf("enter your pm mark:\n");
  scanf("%d", &pm);

  printf("enter your math mark:\n");
  scanf("%d", &mm);

  printf("\n--- Student Details ---\n");

  printf("Roll Number: %d\n", rn);
  printf("Name: %s\n", name);
  printf("CM Mark: %d\n", cm);
  printf("PM Mark: %d\n", pm);
  printf("Math Mark: %d\n", mm);

  total = cm + pm + mm;

  pr = (float)total / 300 * 100;

  printf("pr is %2.f", pr);

  return 0;
}
