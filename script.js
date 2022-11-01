function validateForm() {
  const nama = document.forms["formPendaftaran"]["nama"].value;
  const email = document.forms["formPendaftaran"]["email"].value;
  const pw1 = document.forms["formPendaftaran"]["password"].value;
  const pw2 = document.forms["formPendaftaran"]["Cpassword"].value;

  if (nama == "") {
    alert("Nama Tidak Boleh Kosong");
    nama.focus();
    return false;
  }
  if (email == "") {
    alert("Email Tidak Boleh Kosong");
    email.focus();
    return false;
  }
  if (pw1 == pw2) {
    alert("Login Berhasil");
  } else {
    alert("Password Tidak Cocok");
    return false;
  }
}
