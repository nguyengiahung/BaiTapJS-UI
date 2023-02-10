
// Bai1
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến lương và ngày làm để lấy ra dữ liệu input
    B3: Tạo biến tổng tiền và gán giá trị bằng lương x ngày làm
    B4: Hiển thị kết quả ra giao diện bằng sự kiện click button
*/

function TinhTienLuong() {
    var LuongForm1 = document.getElementById('inputLuongForm1').value;
    var NgayForm1 = document.getElementById('inputNgayForm1').value;
    var TongTien = document.getElementById('textLuongForm1')

    var TienLuong = LuongForm1 * NgayForm1;
    TongTien.innerHTML = "Tổng tiền lương là: " + TienLuong.toLocaleString()
}

document.getElementById('BtnForm1').onclick = TinhTienLuong;

// Bai2
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo 5 biến của 5 số để lấy ra dữ liệu input
    B3: Tạo biến DTB và gán giá trị là điểm trung bình của 5 số
    B4: Hiển thị kết quả ra giao diện bằng sự kiện click button
*/

function TinhDTB() {
    var So1 = Number(document.getElementById('inputSo1Form2').value);
    var So2 = Number(document.getElementById('inputSo2Form2').value);
    var So3 = Number(document.getElementById('inputSo3Form2').value);
    var So4 = Number(document.getElementById('inputSo4Form2').value);
    var So5 = Number(document.getElementById('inputSo5Form2').value);

    var DTB = (So1 + So2 + So3 + So4 + So5) / 5;

    document.getElementById('textLuongForm2').innerHTML = "Điểm trung bình là: " + DTB;
}

document.getElementById('BtnForm2').onclick = TinhDTB;


// Bai3
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến số tiền USD để lấy ra dữ liệu input
    B3: Thực hiện tính toán quy đổi tiền bằng số tiền * 23500
    B4: Hiển thị kết quả ra giao diện bằng sự kiện click button
*/
function TinhTienUSD() {
    var SoTienUSD = document.getElementById('inputSoTienForm3').value
    document.getElementById('textTienForm3').innerHTML = (SoTienUSD*23500).toLocaleString();
}

document.getElementById('BtnForm3').onclick = TinhTienUSD;


// Bai4
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến ChieuDai, ChieuRong để lấy ra dữ liệu input
    B3: Tạo biến DienTich, ChuVi và gán bằng công thức tính Diện Tích và Chu Vi
    B4: Hiển thị kết quả ra giao diện bằng sự kiện click button
*/

function TinhDienTich() {
    var ChieuDai = Number(document.getElementById('inputCDaiForm4').value);
    var ChieuRong = Number(document.getElementById('inputCRongForm4').value);

    var DienTich = ChieuDai * ChieuRong;
    var ChuVi = (ChieuDai + ChieuRong)*2;

    document.getElementById('textForm4').innerHTML = "Diện tích: " + DienTich + "; " + "Chu vi: " + ChuVi;
}   

document.getElementById('BtnForm4').onclick = TinhDienTich;

// Bai5
/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến số tính tổng 2 ký số để lấy ra dữ liệu input
    B3: Đặt điều kiện kết quả chỉ xảy ra khi input là số có 2 chữ số
    B4: Tạo 2 biến 2 số là SoA là hàng chục và SoB là hàng đơn vị, sử dụng công thức tính toán cho 2 số và chuyển sang parseInt để ra 2 số nguyên 
    B5: Gán kết quả là biến KetQua bằng tổng 2 số và hiển thị ra giao diện bằng sự kiện click button
*/

function TinhTong() {
    var SoForm5 = (document.getElementById('inputSoTienForm5').value)
    if (SoForm5.length === 2 ) {
        var SoA = parseInt(SoForm5 / 10);
        var SoB = parseInt(SoForm5 % 10);
        console.log(SoA, SoB);
        var KetQua = SoA + SoB;
    }
    document.getElementById('textTienForm5').innerHTML = "Kết quả: " + KetQua
}   

document.getElementById('BtnForm5').onclick = TinhTong;