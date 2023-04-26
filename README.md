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

  




  







  





