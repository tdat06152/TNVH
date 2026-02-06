# Hướng dẫn thiết lập hệ thống Tự động nhắc lịch (Google Apps Script)

Dưới đây là mã nguồn và hướng dẫn để bạn thiết lập hệ thống tự động gửi Email nhắc lịch trước 1 ngày cho người đăng ký.

### 1. Chuẩn bị
1. Mở Google Sheet chứa dữ liệu phản hồi từ Google Form.
2. Tại menu phía trên, chọn **Extensions** (Tiện ích mở rộng) > **Apps Script**.
3. Xóa mã mặc định và dán đoạn code dưới đây vào.

### 2. Mã nguồn (Google Apps Script)

```javascript
/**
 * Tên: Hệ thống nhắc lịch GHN Experience
 * Chức năng: Quét danh sách đăng ký và gửi mail nhắc trước 1 ngày.
 */

function setupTrigger() {
  // Tạo trigger chạy tự động mỗi ngày vào lúc 8:00 AM
  ScriptApp.newTrigger('checkAndSendReminders')
      .timeBased()
      .atHour(8)
      .everyDays(1)
      .create();
}

function checkAndSendReminders() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0]; // Lấy sheet đầu tiên
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  
  // Giả sử:
  // Cột Email là cột thứ 2 (chỉ số 1)
  // Cột "Ngày trải nghiệm" là cột thứ 5 (chỉ số 4) - Vui lòng điều chỉnh đúng cột trong Form của bạn
  const EMAIL_COL = 1; 
  const DATE_COL = 4;
  const NAME_COL = 2; // Cột tên

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  // Duyệt qua các hàng dữ liệu (bỏ qua header)
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const userEmail = row[EMAIL_COL];
    const userName = row[NAME_COL];
    const experienceDate = new Date(row[DATE_COL]);
    experienceDate.setHours(0, 0, 0, 0);

    // Kiểm tra nếu ngày trải nghiệm là ngày mai
    if (experienceDate.getTime() === tomorrow.getTime()) {
      sendReminderEmail(userEmail, userName, row[DATE_COL]);
    }
  }
}

function sendReminderEmail(email, name, date) {
  const subject = "[GHN] Nhắc lịch: Trải nghiệm thực tế tại Giao Hàng Nhanh vào ngày mai!";
  
  const formattedDate = Utilities.formatDate(new Date(date), "GMT+7", "dd/MM/yyyy");
  
  const body = `
    Chào ${name},
    
    Đây là email nhắc lịch từ Giao Hàng Nhanh (GHN).
    
    Bạn có lịch hẹn trải nghiệm thực tế tại GHN vào ngày mai:
    - Ngày: ${formattedDate}
    - Địa điểm: (Sẽ được thông báo cụ thể theo vị trí bạn chọn)
    
    Một số lưu ý chuẩn bị:
    1. Trang phục: Năng động, thoải mái.
    2. Giày: Bắt buộc đi giày thể thao để đảm bảo an toàn vận hành.
    3. Thời gian: Vui lòng có mặt đúng giờ để bắt đầu hành trình.
    
    Nếu bạn không thể tham gia, vui lòng phản hồi lại email này sớm nhất giúp GHN nhé.
    
    Chúc bạn có một ngày trải nghiệm thật ý nghĩa và "rực lửa" cùng GHN!
    
    Trân trọng,
    Đội ngũ GHN Career.
  `;

  MailApp.sendEmail(email, subject, body);
  Logger.log("Đã gửi email nhắc cho: " + email);
}
```

### 3. Cách kích hoạt
1. Nhấn nút **Save** (Lưu) và đặt tên dự án là `GHN_Reminder_System`.
2. Chạy hàm `setupTrigger` một lần duy nhất. Google sẽ hỏi cấp quyền (Review Permissions) -> Chọn Tài khoản của bạn -> Advanced -> Go to GHN_Reminder_System (unsafe) -> Allow.
3. Sau khi chạy `setupTrigger`, hệ thống sẽ tự động quét bản tính mỗi ngày lúc 8 giờ sáng để tìm những người có lịch hẹn vào ngày hôm sau và gửi mail.

### 4. Lưu ý
- Đảm bảo định dạng ngày tháng trong Google Sheet là kiểu Date chuẩn.
- Bạn có thể thay đổi nội dung email trong hàm `sendReminderEmail`.
