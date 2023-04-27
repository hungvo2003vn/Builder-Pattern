import BANKACCOUNT.*;

class Main {
  public static void main(String[] args) {
    BankAccount customer = new GoldAccount()
                              .setAccountNumber(1019250478)
                              .setOwner("Hưng Võ") 
                              .setPassword("22022003")
                              .setBalance(1000000000)
                              .setBirthday("22/02/2003")
                              .setInterestRate(1)          
                              .Builder();
    System.out.println(customer);
  }
}

// import BANKACCOUNT.*;
// import com.vaadin.flow.component.html.H1;
// import com.vaadin.flow.component.orderedlayout.VerticalLayout;
// import com.vaadin.flow.router.Route;
// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;

// class DB{
//   public static BankAccount customer;
// }

// @SpringBootApplication
// public class Main {

//   public static void main(String[] args) {
//     // Start the Spring Boot application
//     SpringApplication.run(Main.class, args);
    
//     // Create a customer account
//     BankAccount customer = new SilverAccount()
//                               .setAccountNumber(1019250478)
//                               .setOwner("Hung Vo") 
//                               .setPassword("22022003")
//                               .setBalance(1000000000)
//                               .setBirthday("22/02/2003")
//                               .setInterestRate(1)          
//                               .Builder();
//     System.out.println(customer);
    
//     DB.customerDB = customer;
//   }
  
//   @Route("")
//   public static class MainLayout extends VerticalLayout {
    
//     public MainLayout() {
//       add(new H1("Hello World!"));
//     }
    
//   }
  
// }

