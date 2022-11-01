function validateForm() {
  const pw1 = document.forms["formPendaftaran"]["password"].value;
  const pw2 = document.forms["formPendaftaran"]["Cpassword"].value;

  if (document.forms["formPendaftaran"]["nama"].value == "") {
    alert("Nama Tidak Boleh Kosong");
    document.forms["formPendaftaran"]["nama"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["email"].value == "") {
    alert("Email Tidak Boleh Kosong");
    document.forms["formPendaftaran"]["email"].focus();
    return false;
  }
  if (pw1 == pw2) {
    alert("Login Berhasil");
  } else {
    alert("Password Tidak Cocok");
    return false;
  }
}
