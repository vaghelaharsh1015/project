#include<stdio.h>

int main()
{
  for(int i = 0;i<=8;i++)
  {
    for(int j=0;j<=i;j++)
    {
      if(j%2==0)
      {
        printf(" *");
      }
      else
      {
        printf(" %d",j);
      }
    }
    printf("\n");
  }

  printf(" T E C H W A R 2 0 2 6 \n");

 for(int i=11;i>=3;i--)
  {
    for(int j=3;j<=i;j++)
    {
      printf(" %d",j);
    }
    printf("\n");
  }
  return 0;
}