
 
class GFG
 
  constructor(id){
    this.id = id;
 let computeSalary( )
{
    double allowance;
    double hra, da, pf;
     
    hra = 0.2 * basic;
    da = 0.5 * basic;
    pf = 0.11 * basic;
     
    // Condition to compute the
    // allowance for the person
    if (grade == 'A')
    {
        allowance = 1700.0;
    }
    else if (grade == 'B')
    {
        allowance = 1500.0;
    }
    else
    {
        allowance = 1300.0;
    }
     
    return (int) (hra + da + pf + allowance);
     
    gross = hra + da + pf;
    gross = Math.round(basic + hra + da +
                         allowance - pf);
                          
    return (int)gross;
}

public static void main (String[] args)
{
    int basic = 10000;
    char grade = 'A';
     
    
    System.out.println(computeSalary(basic, grade));
}
}