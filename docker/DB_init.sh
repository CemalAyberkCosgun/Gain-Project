#!/bin/bash

mysql -P 3306 -u root -ppassword -Bse 'create database project_db;
use project_db;

CREATE TABLE users (
email varchar(255) PRIMARY KEY,
name varchar(100) NOT NULL,
surname varchar(100) NOT NULL,
password varchar(100) NOT NULL);

INSERT INTO users VALUES
("Abdur-Rahman_Kanish@gmail.com","Abdur-Rahman","Kanish","$argon2id$v=19$m=65536,t=3,p=4$rJsDsaVxBExPgb1fV3k+4w$fbmdsllMsPslXcfWn7qX6XaQ4lJpvvsiRtOR9SFQYN4"),
("c@c.com","Third","User","$argon2id$v=19$m=65536,t=3,p=4$3gbKVwiD9cRxlz37P2zyyg$+pe3n7A3J7BLVKdAO/pOvnin5pnou3osgkA8Yfs7fYQ"),
("d@d.com","Fourth","User","$argon2id$v=19$m=65536,t=3,p=4$qf69B/mUCQ7i4pAPMwB6DA$+U/xiHvUJJaQuFduVWVD0vWfUpck2ieRsF48H77WNsQ"),
("Ahmed-Aziz_Fatigate@test.com","Ahmed-Aziz","Fatigate","$argon2id$v=19$m=65536,t=3,p=4$msTTAJGPkNu1XEikBwtFZQ$WgEAKVAe03z2f44BuNo4zPuMX1KawU06+Rcwo7WGCUg"),
("Ahoua_Unsicker@test.com","Ahoua","Unsicker","$argon2id$v=19$m=65536,t=3,p=4$ey/BfeFVQm7ELIlwh0RKqA$sjEJxVN9SJPLpA7YEUaHO9/Kzh41z3/HaqnicuysJrA"),
("Ahtasham_Curson@outlook.com","Ahtasham","Curson","$argon2id$v=19$m=65536,t=3,p=4$IhAqWffqDOm0rdt1hv50xQ$SAz9tn+0/EzvCl7MEDlopvHhvoKMUHpefs5z5BguOyA"),
("Aidy_Diblase@gmail.com","Aidy","Diblase","$argon2id$v=19$m=65536,t=3,p=4$AgHn/yPfzvrmLVe8vTh2Dg$qkxBx6Ni6Td5WrOt0wZlQwsoyVv9f/XLC/ob+lxnwys"),
("Aleksandrs_Corneau@outlook.com","Aleksandrs","Corneau","$argon2id$v=19$m=65536,t=3,p=4$BvuNvkkXnA8e4WP7Lf6gzQ$cLjw8QwhsTmazbofUPKhdbZpbCzELg4IpemYSQM7+Fw"),
("Amir_Lastinger@test.com","Amir","Lastinger","$argon2id$v=19$m=65536,t=3,p=4$l5O6sT3YQfAHKnC0Wuo+4A$G7ITgvpJmRrVkrjwHIB0scqz/+w70Htum/LcJQscex0"),
("Amro_Pina@gmail.com","Amro","Pina","$argon2id$v=19$m=65536,t=3,p=4$Verpf87/pqDX6yjRD6nJpw$J994Uto68ZB1/BZtxEPBGCbG1RcaWsGIWn1sa+19DxE"),
("Angus_Romanelli@outlook.com","Angus","Romanelli","$argon2id$v=19$m=65536,t=3,p=4$4rCM8bntzTipXUviOMFgHA$8uq0kLJjFhulfHbCsRn9rrg/klQxHwuizb2VPI0giMI"),
("Antoni_Stencil@test.com","Antoni","Stencil","$argon2id$v=19$m=65536,t=3,p=4$EnKuxVfv3hlTWrmdTjkrDg$cHrGqO3PCMpmFSjq1+CN4okLEXgnFGqqVAVmWYgTK+I"),
("Armen_Hoomana@test.com","Armen","Hoomana","$argon2id$v=19$m=65536,t=3,p=4$oEID0FgCN3yVjE47zhz/LA$e/cpVXPnAEhP7+L+lqJDWH+xIvreYE7Nv0+tQLD9PAw"),
("Aronas_Timmer@gmail.com","Aronas","Timmer","$argon2id$v=19$m=65536,t=3,p=4$1KvxpPYqI3C+hRKjpp1U8g$2r/9ZKGsmMn8NkHVF7i2WBKmZMQz3B4bdTStYgeDgr4"),
("Austin_Braisted@test.com","Austin","Braisted","$argon2id$v=19$m=65536,t=3,p=4$8TpTMWkNcX9iU9cRGmUbcQ$Moy7VLvwGr/low2gkZVCyI8YZuR5mXO1gBwYUs50akA"),
("Avraham_Danekas@test.com","Avraham","Danekas","$argon2id$v=19$m=65536,t=3,p=4$6Aq7pQBkysi8/dSE82RPeQ$KZ5iMWJlkSCkIJYTWmJrmdu0tthSDZ7Nyuq5kC+Wu1E"),
("Ayman_Dibbern@test.com","Ayman","Dibbern","$argon2id$v=19$m=65536,t=3,p=4$u1w7A3mnvLL5vCl1VRT2yQ$ZZx8psjuDVvKBqidld7p+W/abWewW4uO8jSOrq6EGrE"),
("Azim_Peppers@gmail.com","Azim","Peppers","$argon2id$v=19$m=65536,t=3,p=4$KVk3ocU0V1lPXPfo16GM+Q$dfOSs1TbAhnh1FSliPaA4uVVbXi40lD6iJM+7sNaluk"),
("Blair_Carilli@outlook.com","Blair","Carilli","$argon2id$v=19$m=65536,t=3,p=4$t2pxBklGS1czsOFXzkTq7Q$bplaTwFURgfwyhtDXfx53SajFYO2ECeygJYrIUuNuk4"),
("Bobby_Axford@gmail.com","Bobby","Axford","$argon2id$v=19$m=65536,t=3,p=4$IPZIw9O8QcVgbo1gd6j43g$fseKMkgO94wcvTsFv3hJTnwIbL1K7TKf5Qj4IgMpLws"),
("Brody_Cofer@gmail.com","Brody","Cofer","$argon2id$v=19$m=65536,t=3,p=4$gzHHBqCykl6MD3LC2OsMNg$COdXkzf4HZfmvh5BxssYANmCe+V4ZeCVZSmcg02sRdk"),
("Cairn_Vonfeldt@gmail.com","Cairn","Vonfeldt","$argon2id$v=19$m=65536,t=3,p=4$nrNsPv3ZXoNpGdol/OW53A$hAGbrZa5AAh27Z4m/1InvOHSc6aQlj9TWl2TZfR0AWU"),
("Charles_Mering@outlook.com","Charles","Mering","$argon2id$v=19$m=65536,t=3,p=4$Zjb4fZAQbG/V4suzngxidg$Nq3V7tlKlv++VTAhDxrAzATI9FlWuNjAF86pUuPP4CY"),
("Chi_Graff@test.com","Chi","Graff","$argon2id$v=19$m=65536,t=3,p=4$nR3b/UTmUzVd+VkfbYnZuw$zij1MDQmTmEUdQEzxTs81ujF3QUpnICw0rTgvXieR0k"),
("Chin_Pepka@outlook.com","Chin","Pepka","$argon2id$v=19$m=65536,t=3,p=4$wvoZiaWDaxtJ7WmdBKdJyw$QujUPSkDyEgguoITmfTavgExSZ/f1Cvsh7eIaiaUyZ4"),
("Chiqal_Dornak@test.com","Chiqal","Dornak","$argon2id$v=19$m=65536,t=3,p=4$jTpKoKi5oSbyv8yCJmyCPw$uVZ7gsPnXfVxRXrUd3JQOMEKYimfu8y1ia2djfmObjg"),
("Clifford_Umanzor@test.com","Clifford","Umanzor","$argon2id$v=19$m=65536,t=3,p=4$KoB+WyID39WS1alonkz96A$9Rr1BP8WVvuEleAKk6RcWYHYk/QPLAaKzVJKunVPVow"),
("Clyde_Riles@test.com","Clyde","Riles","$argon2id$v=19$m=65536,t=3,p=4$jj6XbK9eS4fy89/rQij83Q$flpc6awvVFyU4VFF6dyB80g2Uqag3cVGmH8aGcDBT98"),
("Cohen_Koes@gmail.com","Cohen","Koes","$argon2id$v=19$m=65536,t=3,p=4$j5leTAi77fXjRiTOnq1Obw$1pNTUCLMo5inUaLnA+MD3tXjP19WZiWis+tT+78zZP4"),
("Conlyn_Koep@gmail.com","Conlyn","Koep","$argon2id$v=19$m=65536,t=3,p=4$PzVuw3sW/sj97VOmDRk5aQ$TM1VJK2zKrdZWjOdMm3GMUWzvqo3dYLfGVaqecdmTD8"),
("Corie_Vicsik@gmail.com","Corie","Vicsik","$argon2id$v=19$m=65536,t=3,p=4$ITNSr6D3zahU8L+9NdFLRA$GoKhrQMSaEWtviuV/u9pH01+xfPOPRN4RHr3mwMEa24"),
("Dalton_Jackstadt@outlook.com","Dalton","Jackstadt","$argon2id$v=19$m=65536,t=3,p=4$P3bnOl8S5yT5r8XIkbSYYA$xpOzd7mvt1IKXVjG+ETzsgCP3i1OxGpunoiIrEhhiUo"),
("Dawid_Oberlies@outlook.com","Dawid","Oberlies","$argon2id$v=19$m=65536,t=3,p=4$N7r2mBYkMlnVlLaT4HFCCA$5Iu2uVmkblp/gDSk68zQnw5Ql0i55t73/FQpWqQjA5U"),
("Demetrius_Felman@test.com","Demetrius","Felman","$argon2id$v=19$m=65536,t=3,p=4$XBjur+h2zTViFyOmTRycJA$9+bMrP4qt/dUznzfzR+y4hW8k72ee0sQ4tpZOLM0Qyo"),
("Dilraj_Kavanaugh@gmail.com","Dilraj","Kavanaugh","$argon2id$v=19$m=65536,t=3,p=4$qRbrV0+Bs8j73MjRqJaPQQ$/7jPjYyXw0mgQnuUHhzOV2oIK2nh+kbUXtlTO/aYnno"),
("Eddie_Noun@outlook.com","Eddie","Noun","$argon2id$v=19$m=65536,t=3,p=4$9ZgO9IXQjON6GMgmOQc4/w$rxPJKsu7iDeHqtCn+f2mUvQhLCz5/knH6o2k8P74oO4"),
("Fabian_Bounthapanya@gmail.com","Fabian","Bounthapanya","$argon2id$v=19$m=65536,t=3,p=4$NBroSpXywx5paiVwFVBJjg$gDjoWluWT44A17Kfl0PrRAhgM+lTEkKqIutNdF6zLhw"),
("Faheem_Kaldas@test.com","Faheem","Kaldas","$argon2id$v=19$m=65536,t=3,p=4$6vXDKFJ9M7Ba+ltdnxaDYg$sD+3pAcDGk1+Qqq3JnIo572HdjbTYOrCwtz+n/QDnTk"),
("Fezaan_Wittels@gmail.com","Fezaan","Wittels","$argon2id$v=19$m=65536,t=3,p=4$Ne61zrfM2iuUR9lz2cYk4Q$VskmNhQEB+Laq5OGowO7iW0W5aPx/qJ0elbnYW5QqRc"),
("Freddie_Salvatore@gmail.com","Freddie","Salvatore","$argon2id$v=19$m=65536,t=3,p=4$CujievIPeWYcwvU6ARjDZQ$xo4DafiiWQX6pgmwQ9JgV1pqxzAvbJOvxHTXsQnG2OQ"),
("Garren_Lansford@test.com","Garren","Lansford","$argon2id$v=19$m=65536,t=3,p=4$JRGh14xrj//KoJdCoHEYKw$7M2iMfAOj86BxNbsSKH3aQY14SRlKpf16W6NFtUsJwc"),
("Ghyll_Midgette@outlook.com","Ghyll","Midgette","$argon2id$v=19$m=65536,t=3,p=4$HZArygz5CRCSxPbIUsceIw$ToU6QdNzn6Gj5QkJmgwaeVYGrKMvbdtG5zXVSqODXO8"),
("Gordon_Ukosata@outlook.com","Gordon","Ukosata","$argon2id$v=19$m=65536,t=3,p=4$IOxchltP1oazVdiJtmuQGQ$BTqnV6/3HOZHkr8YlXYJZ4UTcBq4kjvuC1F7nRNcY4o"),
("Haider_Piccola@test.com","Haider","Piccola","$argon2id$v=19$m=65536,t=3,p=4$WBopo1M12hG9YrOCpFsLfg$frx1cRpj1aw8KwuPI0/SDgs51OjhL+Kp66cc8Z7z7/o"),
("Hareem_Waller@outlook.com","Hareem","Waller","$argon2id$v=19$m=65536,t=3,p=4$J7V5CqgzNS+PhbFdGh6IBw$tnHZ3RDWk7vbWdOdgsK9EjwxqRlDhTaPfZ1FNLLARdA"),
("Haris_Demagistris@outlook.com","Haris","Demagistris","$argon2id$v=19$m=65536,t=3,p=4$r9MxAAE++WOhiL7srNlJrA$ellTz7+PMSmUGB+kH/lFGXQfDCEaGfA4T+z1ZCsJssE"),
("Hector_Merced@outlook.com","Hector","Merced","$argon2id$v=19$m=65536,t=3,p=4$1ta0B4ShfNnlFAv5UvwyPA$osbkL7dLqNAsVrRNXNaR6FpHgiohtEg900+tsD4WLPQ"),
("Isimeli_Lavy@outlook.com","Isimeli","Lavy","$argon2id$v=19$m=65536,t=3,p=4$OWNXmg1R9x5pHNk+Z55o3w$e4JK7PskY3M2lTZgnAExyhN7a54t1wZkojLrEnXYqD4"),
("Jad_Solorzano@test.com","Jad","Solorzano","$argon2id$v=19$m=65536,t=3,p=4$Aqx3UCLgjpqDSicbI+tHDQ$GQNc6hpvjHJJqf7eYIxI1cinC/WSs0aAmJ9Cr1Yku20"),
("Jasey-Jay_Vannette@outlook.com","Jasey-Jay","Vannette","$argon2id$v=19$m=65536,t=3,p=4$acsle3rPa671DU2P6okaQQ$xZ8d63H5XyaQoSWbl7e5mpBgG5/L+tX2BZjWgnMLez0"),
("Jayden-James_Kisner@gmail.com","Jayden-James","Kisner","$argon2id$v=19$m=65536,t=3,p=4$gt8NfKmNAtnvJN34nTFP9g$0cVSasplWUIb9wleFwgaZIEVjUX7L2yLXPlt0sMxblM"),
("Jayden-Lee_Risberg@test.com","Jayden-Lee","Risberg","$argon2id$v=19$m=65536,t=3,p=4$CFU+B2VYEMNonp0T7jfr3Q$deoqoXaWJx1//lk9EVeCAejqpV4WWmMsmhM3gMbuj2o"),
("Jaydyn_Vemura@gmail.com","Jaydyn","Vemura","$argon2id$v=19$m=65536,t=3,p=4$FwY5d9hC2w83ygEtDkuJ+Q$ugZWfskA34c8dlpUSDDMiQSFR9YsRSPZRbLkU+riDtY"),
("Jaymie_Pauldo@test.com","Jaymie","Pauldo","$argon2id$v=19$m=65536,t=3,p=4$iVittBxl3CqKIqh2kqcM1g$cLEh1pi0u6JppY9+jhxQL43QCrpntJetVVYcL05RgE4"),
("Jody_Scavetta@test.com","Jody","Scavetta","$argon2id$v=19$m=65536,t=3,p=4$qEhMm4Wx+HNjKo8bo15OFQ$/MYL31Xw+t0q4K+lkO8KaOqg61beJ186LmSdYdehDhY"),
("Johannes_Reola@gmail.com","Johannes","Reola","$argon2id$v=19$m=65536,t=3,p=4$D2IHiEsIyeEROb6Tvbd4bQ$8HyLVAAZjQOGdXxhuWw4aVF0s5yN9mMJmQ2We8pcHcI"),
("Johnnie_Alberg@gmail.com","Johnnie","Alberg","$argon2id$v=19$m=65536,t=3,p=4$g7FlastacAImsH7ldMiq/g$rERh6IvYJaPiipI4Rs6DjPB8lwQ4/4kHUGXiiP9le68"),
("Kaid_Henney@test.com","Kaid","Henney","$argon2id$v=19$m=65536,t=3,p=4$SlWvwDgaOACy/FyHhBmxSA$ccqXVjQJHBXj5NOB/eABA7WcfRyvlHz4vPzQIktLYno"),
("Kenzi_Schlick@test.com","Kenzi","Schlick","$argon2id$v=19$m=65536,t=3,p=4$oEGc9e4zjpUncwkPjFHGOw$yGk/ofJOeXChORQjropWTlNkdWcMWnBZTVSXT/chMFo"),
("Khaya_Pottle@test.com","Khaya","Pottle","$argon2id$v=19$m=65536,t=3,p=4$ewuvcsqCBQ1AJ/cCXALP+Q$O75TxHUp2wdaXakyV5Twj7ockrTI8zAR7AjuOIJmfGI"),
("Killian_Jochum@gmail.com","Killian","Jochum","$argon2id$v=19$m=65536,t=3,p=4$abWMyhTBx+XaOXtSNSr8DA$wZf75pWaQoGxgFws9f8Nf4tjrFYOnOLNi1zUJWT89yw"),
("Kole_Vawter@test.com","Kole","Vawter","$argon2id$v=19$m=65536,t=3,p=4$LjSczdecaItV+lAzd+BKVw$7X5ADmRX8j918c1EDJ3bTJSunJzQ6eHLdWvrygUoJjE"),
("Konrad_Ramsburg@test.com","Konrad","Ramsburg","$argon2id$v=19$m=65536,t=3,p=4$8qr10La12LeUUWm9q9vXvw$DCH3RxIBrMIXoKdiEbyG5ZevIlzeD7WWJzkU31tWDF8"),
("Kristopher_Stoutenger@outlook.com","Kristopher","Stoutenger","$argon2id$v=19$m=65536,t=3,p=4$2bQHoXtyHL0MWjSKALAW9A$7OUugZ9HWHuNORCFTVHw/7/uxAZCJsMkG8yXQiNO6iw"),
("Kyhran_Dabadie@outlook.com","Kyhran","Dabadie","$argon2id$v=19$m=65536,t=3,p=4$9RbpANYLJyymMPnQNxDGgA$CGaiBOU1h9UsCOo+OW+WV8LroNMHgGzEBvWXa5la4O8"),
("Kyle-Derek_Coulombe@outlook.com","Kyle-Derek","Coulombe","$argon2id$v=19$m=65536,t=3,p=4$fGTk00c70kRda/S0Vvyusw$Axc0kV7NQyD2eZ/94UfC6bqyC/Sawg5jNh/HVCeHIeg"),
("Kynan_Sunseri@outlook.com","Kynan","Sunseri","$argon2id$v=19$m=65536,t=3,p=4$+aoMN/xxxg9bRYfnhraiVQ$U2vzHQ8sM40wdh8bdt6fuhM9d0lobqaulwkSZ9kxrsc"),
("Leigham_Britain@gmail.com","Leigham","Britain","$argon2id$v=19$m=65536,t=3,p=4$TS+BpxitPMbURSdMzf51EQ$BgfMI4TwEOuCni4R7+nz7HdAXzB+UERpynUiaB3ros8"),
("Luic_Bibee@gmail.com","Luic","Bibee","$argon2id$v=19$m=65536,t=3,p=4$nfSi3xASa/49GIWbxtgZSQ$pokEDQG7QpcZHJZaKTz3byooaU2ygdRWEMfrdQ5WSEY"),
("Malachi_Esponda@test.com","Malachi","Esponda","$argon2id$v=19$m=65536,t=3,p=4$ZlKbl18QrIT+v06OjcyIoA$+UkpA/A9BqgsKS38a+3wYPcjzDnoye9alJLgsQ0w2UI"),
("Maxx_Bonds@outlook.com","Maxx","Bonds","$argon2id$v=19$m=65536,t=3,p=4$meqedlvyd/3BYDo30gZh8w$hxdUq3txzNBSP9fZOoOgOil3zPj7iDqcWWHHroFh6KM"),
("Milos_Salama@gmail.com","Milos","Salama","$argon2id$v=19$m=65536,t=3,p=4$Kxq/1HlMf4RFt9ly3DPlLw$kNxEz9HC91qb+VA+O97eaCtjDEbv96iks75YF5Svo6g"),
("Mohamad_Vanes@outlook.com","Mohamad","Vanes","$argon2id$v=19$m=65536,t=3,p=4$V9XYgfAsFrZa+foZKZqnNA$7APyPYMcjsdIhqoHvnEu+wRPTQp2UmMhiZ9VkDaCtBU"),
("Mustapha_Agerton@test.com","Mustapha","Agerton","$argon2id$v=19$m=65536,t=3,p=4$IA8wax62yX+g23qd7uTnug$CgeivQUp8u0Un8eGtPguCkjaYmGhREBo7CWEayJuW/c"),
("Nairn_Chong@outlook.com","Nairn","Chong","$argon2id$v=19$m=65536,t=3,p=4$xK8A6LyCIigOVKAM/DjigQ$Bt2y0rHyj4v25tAit4o3umJjiFn9AJYSKSwn92qfg6o"),
("Nash_Sajor@test.com","Nash","Sajor","$argon2id$v=19$m=65536,t=3,p=4$ML84P1PTiy5m9c6IlVhBfQ$XvNbXz33hL8R+puKsAV3scizE8LB2ldmYvpeNeI1kgI"),
("Nathanael_Grunau@outlook.com","Nathanael","Grunau","$argon2id$v=19$m=65536,t=3,p=4$8PsDa3nfJqAI+qI9P6Gqzw$57ayq9AoQDIQoCBIc+5AE40jbUstEtcEuNGl0hQaOiM"),
("Nickhill_Lockery@test.com","Nickhill","Lockery","$argon2id$v=19$m=65536,t=3,p=4$MzrBcMtghHd03+xRk2AOww$Bmhd0R1fQW6B8ecQM10ME/rYBh9TwmPlM40IKBV3CYc"),
("Nikodem_Brazeau@test.com","Nikodem","Brazeau","$argon2id$v=19$m=65536,t=3,p=4$YVDVnkwCbhxnttz0giD3uA$0sOK0KqfjaMkMEKaARmHUZXGd4SOUbE3QEACsL802no"),
("Noor_Shoults@outlook.com","Noor","Shoults","$argon2id$v=19$m=65536,t=3,p=4$S5CPA6rLyW3fbta/3pzykQ$ENQfzKLVkoZBIK0MI5qNSBhtMdm5NG8vmh55Fu31jtM"),
("Oluwafemi_Dreyer@gmail.com","Oluwafemi","Dreyer","$argon2id$v=19$m=65536,t=3,p=4$OItzXGPKdL6yYUPX/3X97A$NoRP690xYM3lSQ96tf21o+RO2vtbig5ky2N8Tpt6mOQ"),
("Rennie_Guley@test.com","Rennie","Guley","$argon2id$v=19$m=65536,t=3,p=4$qZufgeqd5SU3RFswXIoEFg$b0VV2l7LOta+HRZn/ZjTFDEu3n/5gOppescZA0AD8JM"),
("Rishi_Alexandra@outlook.com","Rishi","Alexandra","$argon2id$v=19$m=65536,t=3,p=4$+QX+ypY+0ulwdF9+MdS/vQ$vlbrSwfHvu7vF8kQF8aCd0QVN9Cs9bBMnxTIAXixojw"),
("Rocco_Goodgion@outlook.com","Rocco","Goodgion","$argon2id$v=19$m=65536,t=3,p=4$2n4iuBWhUXZRLa+5mZ/NXg$slfKFBETt9Gs0pekyXJXPBuMveeFbTMIlllJC8tgBuI"),
("Rudi_Gubitosi@outlook.com","Rudi","Gubitosi","$argon2id$v=19$m=65536,t=3,p=4$Q+GdZ4LfICQb+pltfBW9SA$D+wHh6RLCxwY/sMMeW6AHrpIsGf+BLP+LScq5Atn2a0"),
("Rui_Stachnik@test.com","Rui","Stachnik","$argon2id$v=19$m=65536,t=3,p=4$kd9CYR6A9p9IMjxAR6xlSA$ijGld3fJ9z8IqodSIQbGjJFoAAF/TlB2OrxUkQzYhJw"),
("Saad_Gravitz@test.com","Saad","Gravitz","$argon2id$v=19$m=65536,t=3,p=4$zSAhl/jdFYDjQoMAlfPVNg$57NAWJC9aZDdh3fIYPVo2rDZN4BNqhYNTLthUu4iAlE"),
("Sandro_Urfer@test.com","Sandro","Urfer","$argon2id$v=19$m=65536,t=3,p=4$QLqgF1tFFYbQECuu3XahTQ$j5r6hXLavPQLSOEZ8OEtGNwIpor/12G1Dmt6Xops4bk"),
("Seaan_Lasyone@gmail.com","Seaan","Lasyone","$argon2id$v=19$m=65536,t=3,p=4$sMnD12fMoxyfzY7yF7+jcQ$9KBs887EZ6cxr4pe4Ek2y5eA4DUkUcFpnXQIXamEfgc"),
("Shai_Mohamed@gmail.com","Shai","Mohamed","$argon2id$v=19$m=65536,t=3,p=4$F52C4UnImTMIFygEvzqh8w$hez3Lzsm+FgpBB5CGDADhVuI+ariuDiy38LRBbbHKcQ"),
("Shyam_Weirather@gmail.com","Shyam","Weirather","$argon2id$v=19$m=65536,t=3,p=4$ztTKMS9xviiHnxQK6bMnNA$YCssYGm8ra/ViFj3c8S4/JNhEMRiGrpOB0334NZs8RQ"),
("Talha_Majestic@test.com","Talha","Majestic","$argon2id$v=19$m=65536,t=3,p=4$HpU5AjmkuCNSRprpV/mJog$dg2eDmanRwibI8XPhgbWdNcsayHbDHsJzrOC+3tjqmE"),
("Teagan_Boatright@test.com","Teagan","Boatright","$argon2id$v=19$m=65536,t=3,p=4$d8BqpeSr0lppUtzKOEQGUg$Hac0eS+jmQXkBn2Fe/TjvU243jZFmmM+32MMHt3lTXU"),
("Tee-jay_Lovette@test.com","Tee-jay","Lovette","$argon2id$v=19$m=65536,t=3,p=4$VfYV9KIC6KDAj6NVx/DBLg$HKbzz25ceLmwP7Vvkz/5LKF7QRkX129gzGw7WK+3jc0"),
("Teejay_Lohry@outlook.com","Teejay","Lohry","$argon2id$v=19$m=65536,t=3,p=4$GUdeW2zFVHmhBX+i0U4l3Q$jY46wX8/DbGVpUUWlq1ds2JYYbN28xSZWfZzrfm3GaA"),
("Timucin_Schroeder@test.com","Timucin","Schroeder","$argon2id$v=19$m=65536,t=3,p=4$Siq66KOxHrxxGW/3Y4RIig$PDWUIqdmDwX6njP2cpEYEDzFfUwQ0U7M4V/RB1vMrwY"),
("Tommi-Lee_Vulich@outlook.com","Tommi-Lee","Vulich","$argon2id$v=19$m=65536,t=3,p=4$ao7pkvtIrikumD5nbXwEyA$/++H4f0LG78mdZE1i+Q8a033cKfTqJzwvS58cXHL/wA"),
("Yusef_Thorndike@outlook.com","Yusef","Thorndike","$argon2id$v=19$m=65536,t=3,p=4$oyR8VxZLuEA962HV2gUyVA$270Mbh7l1yT8HKZigWQWFamA3k5yFGEPEL+ioDU4UvQ"),
("Zakk_Gloston@test.com","Zakk","Gloston","$argon2id$v=19$m=65536,t=3,p=4$ftQrzvKgiAmAzk/0MMSo5g$dL99KTmcz/WcT8ypwVugCzwwk/o+B+A7JUbWTpB6fCw"),
("Zerah_Mattioli@outlook.com","Zerah","Mattioli","$argon2id$v=19$m=65536,t=3,p=4$6WmIu0KjWH/4eHcQMnfftw$etgxUgyzAbW3DN5A6HFtQs2/y9ty2Yv4mJnIq/s5e8U"),
("Zhi_Borkowski@test.com","Zhi","Borkowski","$argon2id$v=19$m=65536,t=3,p=4$XVS1uuWfngZ2OWGhLTH8Zw$EVWVBa64yNDjV386JB9iB1t4gBs8skLI1KaZxy4j/yI"),
("Zinedine_Kerans@test.com","Zinedine","Kerans","$argon2id$v=19$m=65536,t=3,p=4$f06uyS6UtV85HwGRIwxH9A$txyycPKoOFueBs7HsPjDApQx+zIjFavUyMAV8cqiGDU");

create table admins (
email varchar(255) PRIMARY KEY,
name varchar(100) NOT NULL,
surname varchar(100) NOT NULL,
password varchar(100) NOT NULL);

INSERT INTO admins VALUES
("a@a.com","First","User","$argon2id$v=19$m=65536,t=3,p=4$PViNl00j+BFB/lpp3xMdeA$WWSLdAZu7rsr56WCwaSt5tQO/K1B2UpT5VHNnG6M7Cs"),
("b@b.com","Second","User","$argon2id$v=19$m=65536,t=3,p=4$co6OHenHLXzA6EtXqC2YRw$agV+syJK+NkAGsIPyB26p7HSy3YRewTnutJ+0LWMgWM");

create table titles (
ID int PRIMARY KEY AUTO_INCREMENT,
name varchar(100) NOT NULL UNIQUE,
description varchar(1024),
rating double NOT NULL,
title_image varchar(128));

create table seasons (
ID int PRIMARY KEY AUTO_INCREMENT,
season_num int NOT NULL,
episode_num int NOT NULL,
title_ID int,
FOREIGN KEY (title_id) REFERENCES titles(ID));

create table episodes (
ID int PRIMARY KEY AUTO_INCREMENT,
name varchar(100) NOT NULL,
description varchar(1024),
vid_url varchar(128),
title_ID int,
FOREIGN KEY (title_id) REFERENCES titles(ID),
season_ID int,
FOREIGN KEY (season_id) REFERENCES seasons(ID));

CREATE USER "admin"@"%" IDENTIFIED BY "admin";
GRANT ALL on project_db.titles to "admin"@"%";
GRANT ALL on project_db.seasons to "admin"@"%";
GRANT ALL on project_db.episodes to "admin"@"%";
GRANT SELECT on project_db.admins to "admin"@"%";

CREATE USER "user"@"%" IDENTIFIED BY "user";
GRANT SELECT, INSERT, UPDATE, DELETE on project_db.users to "user"@"%";
'