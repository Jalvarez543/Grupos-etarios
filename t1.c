#include <stdio.h>

int edad; 

int main(){
    printf("Ingresa tu edad: \n"); 
    scanf("%d", &edad); 

    if (edad<=12) 
    {
        printf("Eres un niño."); 
    }
    
    else if (edad>=13 && edad<=17){ 
        printf("Eres un adolescente."); 
        }

    else if (edad>=18 && edad<=29){
        printf("Eres un adulto joven."); 
        }

    else{
        printf("Eres un adulto mayor"); 
        }
}
        
 