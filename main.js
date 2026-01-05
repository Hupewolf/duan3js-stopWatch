let tong = 0;
// thì biến này là tổng thời gian tính bằng đơn vị ms

let timer = null;
// null có nghĩa là giá trị rỗng hoặc giá trị không tồn tại, nó có thể được sử dụng để gán cho một biến như là một đại diện không có giá trị
// vì sao ở đây lại xài null thì nó đại diện cho interval đang chạy, null là không có intervel
// sao lại không phải là let timer; thì nó sẽ là undefined sao 2 cái nó cũng là đều biểu thị sự vắng mặt của giá trị nhưng không dùng undefined vì không có giá trị nào được gán cho biến, nên biến trở thành undefined, kiểu nó là không có chủ đích còn null là gán có chủ đích

let x = 1;
// biến này dùng cho cái tua nhanh

const timeTest = document.getElementById("time");

function time(ms) {
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const ms2 = Math.floor((ms % 1000) / 10);
    // Math.floor là lấy phần nguyên thì logic nó như thế này ms đổi thành h thì chia 3600000 rồi lấy phần dư ra đổi ra p là / 60000 rồi lấy dư ra đổi ra giây là / 1000 thì do đồng hồ hiển thị 2 chữ số nên / thêm 10
    // thì sao lại time(ms) thì ms chỉ làm tạm để thực hiện tính toán

    return `
        ${String(h).padStart(2, "0")} :
        ${String(m).padStart(2, "0")} :
        ${String(s).padStart(2, "0")}<span class="ms">.${String(ms2).padStart(2, "0")}</span>
    `;
    // padStart() thì nó là thêm nội dung vào đầu chuỗi thì như trên là h đi String(h) là số cần thêm 2 là độ dài chuỗi sau khi thêm tránh việc số đó có 2 số rồi mà thêm nữa 0 là nội dung được thêm
}

function start() {
    if (timer) return;
    // null tương đương với false nên là kiểm tra true là có interval rồi return false thì chạy doogs dưới

    timer = setInterval(() => {
        tong += 10 * x;
        timeTest.innerHTML = time(tong);
        // này lấy tong ấy giá trị hiện tại của tong, đưa vào chỗ trống đó
        
    }, 10);
}

function pause() {
    clearInterval(timer);
    // đây là dừng interval cho nó đứng lại

    timer = null;
    // nó không giữ interval nữa
    // vì sao không đổi được 2 cái này thì cho timer = null; trước nó không giữ interval nữa thì lúc này clearInterval(timer); không còn tác dụng nên vẫn còn chạy ngầm
}

function reset() {
    pause();
    tong = 0;
    x = 1;
    timeTest.innerHTML = `00 : 00 : 00<span class="ms">.00</span>`;
    document.getElementById("f").textContent = "x2";
}

function fast() {
    x = x === 1 ? 2 : 1
    document.getElementById("f").textContent = x === 2 ? "x1" : "x2";
}