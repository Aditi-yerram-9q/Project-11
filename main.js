var members = [
  "B Sudershan",
  "B Uma rani",
  "Harsha sri Yerram ",
  "Aditi yerram ",
  "Aniketh yerram "
];

var images = [
  "B Sudershan.jpeg",
  "B Uma rani.jpeg",
  "Harsha sri Yerram.jpeg",
  "Aditi Yerram.jpeg",
  "Aniketh Yerram.jpeg",
];

var i = 0;

function next() {

  var number_of_family_member_in_array = members.length;
  document.getElementById("family_members_name").innerHTML = members[i];
  document.getElementById("Family_members_images").src = images[i];
  i++;
  if (i > number_of_family_member_in_array - 1) {
    i = 0;
  }

}