# Bài báo cáo về Builder Pattern

## Phân công nhiệm vụ
| Tên | MSSV | Nhiệm vụ |
|:---|:-----|:---------|
| Võ Tấn Hưng | 2113623 | Thiết kế và hiện thực ví dụ, viết báo cáo |
| Trương Thuận Hưng | 2113619 | Thuyết trình về phần hiện thực ví dụ |
| Trần Minh Hiếu | 2113363 | Thuyết trình về lí thuyết Builder Pattern |
| Lê Đình Huy (Nhóm trưởng) | 2113481 | Làm PowerPoint, nghiên cứu nội dung |
| Nguyễn Phạm Thiên Phúc | 2114445 | Làm Web ứng dụng ví dụ, trình bày sản phẩm |

## Nội dung
1. Cấu trúc
2. Ưu điểm và nhược điểm
3. Hiện thực bằng code Java
4. Liên hệ Design Pattern khác
5. Video demo web

##
### 1. Cấu trúc
- Giới thiệu:
  - Builder là một design pattern thuộc nhóm khởi tạo (Creational Pattern). Được xây dựng nhằm khắc phục một số nhược điểm tồn đọng của Factory Method và Abstract Method khi gặp những đối tượng phức tạp.
  - Builder Pattern cho phép chúng ta chia nhỏ Constructor của chúng ta ra thành nhiều phần và từ đó nó cho phép chúng ta khởi tạo đối tượng phức tạp từ các đối tượng đơn giản, một cách linh hoạt theo nhiều hướng khác nhau.
  - Builder cho phép người dùng khởi tạo các đối tượng phức tạp từng bước một thay vì truyền quá nhiều tham số vào hàm khởi tạo.
- Cấu trúc Builder Pattern:
  - Product là một đối tượng phức tạp bao gồm nhiều thuộc tính.
Các class Product1, Product2 là class của các đối tượng cần dùng Builder để khởi tạo.
Mỗi Product sẽ có ConcreteBuilder tương ứng. 
  <p align="center">
      <img src="https://user-images.githubusercontent.com/108314498/234657634-6156f8db-a20f-4acf-a886-5ea513e10a87.png">
  </p>
  
  - Builder có thể là abstract class hoặc là Interface. Chứa những phương thức để khởi tạo, thiết lập các thuộc tính cần thiết của đối tượng.
  
  - Mỗi class ConcreteBuilder gồm có:
    - Tất cả thuộc tính của đối tượng Product.
    - Phương thức reset(): khởi tạo đối tượng result 
    - Các phương thức buildStep()
    - Phương thức getResult()
  - Mỗi ConcreteBuilder có thể triển khai một cách khác nhau để xây dựng các thành phần và thuộc tính của đối tượng tương ứng. Từ đó, chúng ta có thể tạo ra các đối tượng Product khác nhau.
  - Director sẽ gồm có:
    - Phương thức Director (builder)
    - Phương thức changeBuilder (builder) 
    - Các phương thức make (type)<br>
    -> ***Director là một lớp định nghĩa các bước để xây dựng đối tượng và quản lý quá trình xây dựng đối tượng***
  - Client là người dùng. Người dùng sẽ sử dụng trực tiếp ConcreteBuilder hoặc dùng Director để khởi tạo đối tượng
  <p align="center">
      <img src="https://user-images.githubusercontent.com/108314498/234661349-5eb87019-fe59-47df-b168-4b0527a5d921.png">
  </p>
  
### 2. Ưu điểm và Nhược điểm
- Ưu điểm:
  - Tránh việc phải viết nhiều hàm khởi tạo cho class.
  - Không cần phải truyền giá trị null cho các tham số mà đối tượng không cần sử dụng tới.
  - Hạn chế các lỗi phát sinh do việc gán sai hoặc gán nhầm tham số như trước đây.
  - Kiểm soát tốt hơn quá trình xây dựng của đối tượng
  - Code trở nên uyển chuyển.
- Nhược điểm:
  - Code có thể trở nên nhiều hơn và phức tạp hơn do đòi hỏi phải sử dụng nhiều class mới có thể cài đặt được pattern này.
### 3. Hiện thực bằng code Java
- __Product__:
``` java
public class BankAccount{ // product
	private int accountNumber;
	private String owner;
		private String password;
		private String birthday;
	private int balance;
	private int interestRate;

    public BankAccount(int accountNumber, String owner, String password, String birthday, int balance, int interestRate){
   	super();
   	this.accountNumber = accountNumber;
   	this.owner = owner;
   	this.password = password;
   	this.birthday = birthday;
   	this.balance = balance;
   	this.interestRate = interestRate;
  	}
```
  + Cung cấp thêm các hàm thao tác tùy thuộc vào yêu cầu công việc:
``` java
public int getAccountNumber() 
    return this.accountNumber;

public int getOwner() 
    return this.owner;

public int getPassword()
    return this.password;

public int getBirthday() 
    return this.birthday;

public int getBalance() 
    return this.balance;

public int getInterestRate() 
    return this.interestRate;

@Override
public String toString() {
    return "Account Information\n* Account Number:" 
     + this.getAccountNumber() 
    + "\n* Owner: " + this.getOwner()
     + "\n* Password: " + this.getPassword() 
    + "\n* Birthday: " + this.getBirthday() 
    + "\n* Balance: “ + this.getBalance() 
     + "\n* InterestRate: " + this.getInterestRate();
    }
}
```
- __Builder__ - Khai báo phương thức tạo đối tượng, ví dụ cụ thể khai báo các hàm:
``` java
public interface builder {// builder
    public builder setAccountNumber(int accountNumber);

    public builder setOwner(String owner);

    public builder setPassword(String password);

    public builder setBirthday(String birthday);

    public builder setBalance(int balance);

    public builder setInterestRate(int interestRate);

    public BankAccount Builder();
}
```
- __Concrete Builder__: kế thừa builder, chi tiết cách tạo ra đối tượng bằng các hàm
``` java
@Override
  public builder setAccountNumber(int accountNumber){
    this.accountNumber = accountNumber;
    return this;
  }
  
@Override
  public builder setOwner(String owner){
    this.owner = owner;
    return this;
  }
  
@Override
  public builder setPassword(String password){
    this.password = password;
    return this;
  }
  
@Override
  public builder setBirthday(String birthday){
    this.birthday = birthday;
    return this;
  }

@Override
  public builder setBalance(int balance){
    this.balance = balance;
    return this;
  }

@Override
  public builder setInterestRate(int interestRate){
    this.interestRate =  interestRate;
    return this;
  }
```
  + Và cung cấp phương thức trả về bằng hàm Builder()
``` java
@Override
    public BankAccount Builder() {
        return new BankAccount 	
        (this.accountNumber, this.owner, this.password,      	this.birthday, this.balance,this.interestRate);
    }
```
- __Director__: Main function, gọi tới builder để tạo ra đối tượng __bankinfo__ bao gồm các thuộc tính được truyền vào
``` java
public class director {
    public static void main(String args[]) {
        BankAccount bankinfo = new BankAccountBuilder() 				                    			       .setAccountNumber(77423)
			       .setOwner(“Spider")
			                               .setPassword("123123")
			            		       .setBalance(1000)		       			       	      								       .setBirthday("15/05/2003") 					      							       .setInterestRate(1).Builder();
        System.out.println(bankinfo);
    }
}
```
- __Result__: chạy code và được kết quả
``` java
Account Information
*Account Number: 77423
*Owner: Spider
*Password: 123123
*Birthday: 15/05/2003
*Balance: 1000
*InterestRate: 1
```
##
### Thêm ràng buộc vào parameter
- __Yêu cầu__: Thêm thuộc tính AccountLevel bao gồm 3 level: Silver, Gold, Diamond để phân loại account. Đối với account loại __Gold__ và __Diamond__, cho phép set __BonusInterestRate__.
- __Giải pháp__: Xây dựng từng __Concrete Builder__ riêng cho từng __level Account__

![image](https://user-images.githubusercontent.com/108314498/234668141-6570bc84-869a-47a6-97c3-fac42ecb0914.png)

- __Cụ thể__: Khi người dùng new một đối tượng theo level thì hàm sẽ trả vể các builder tương ứng
``` java
BankAccount Silverbankinfo = new SilverAccount().method1.method2.....Builder()
BankAccount Goldbankinfo = new GoldAccount().method1.method2.....Builder()
BankAccount Diamondbankinfo = new DiamondAccount().method1.method2.....Builder()
```
- __Kết quả__:
  - Nếu người dùng set giá trị  __BonusInterestRate__ cho __Silver account__
``` java
BankAccount Silverbankinfo = new SilverAccount().setBonusInterestRate(50)
    .
    .
    .Builder()
```
  - Kết quả trả về: Error
```java
director.java:3: error: cannot find symbol
              BankAccount Silverbankinfo = new SilverAccount().setBonusInterestRate(50)
                                                    ^
symbol:   method setBonusInterestRate(int)
location: class SilverAccount
1 error
  ```












  




  







  





