var University = {
  students: [
    {
      name: "Nurlan",
      lastname: "Huseynov",
      score: 97,
      group: "P506",
      getTeacherName: function() {
        for (var tech in University.teachers) {
          if (University.teachers[tech].group == this.group) {
            return University.teachers[tech].getInfo();
          }
        }
      },
      getInfo: function() {
        return this.name + " " + this.lastname;
      }
    },
    {
      name: "Ayxan",
      lastname: "Enverli",
      score: 91,
      group: "P506",
      getTeacherName: function() {
        for (var tech in University.teachers) {
          if (University.teachers[tech].group == this.group) {
            return University.teachers[tech].getInfo();
          }
        }
      },
      getInfo: function() {
        return this.name + " " + this.lastname;
      }
    },
    {
      name: "Resul",
      lastname: "Agarzayev",
      score: 98,
      group: "P507",
      getTeacherName: function() {
        for (var tech in University.teachers) {
          if (University.teachers[tech].group == this.group) {
            return University.teachers[tech].getInfo();
          }
        }
      },
      getInfo: function() {
        return this.name + " " + this.lastname;
      }
    },
    {
      name: "Kamal",
      lastname: "Mirzayev",
      score: 98,
      group: "P507",
      getTeacherName: function() {
        for (var tech in University.teachers) {
          if (University.teachers[tech].group == this.group) {
            return University.teachers[tech].getInfo();
          }
        }
      },
      getInfo: function() {
        return this.name + " " + this.lastname;
      }
    },
    {
      name: "Anar",
      lastname: "Maqsudov",
      score: 90,
      group: "P508",
      getTeacherName: function() {
        for (var tech in University.teachers) {
          if (University.teachers[tech].group == this.group) {
            return University.teachers[tech].getInfo();
          }
        }
      },
      getInfo: function() {
        return this.name + " " + this.lastname;
      }
    }
  ],

  teachers: [
    {
      name: "Ismayil",
      lastname: "Ismayilov",
      group: ["P506"],
      student: function() {
        for (var stu in University.students) {
          if (University.students[stu].group == this.group) {
            console.log(University.students[stu].getInfo());
          }
        }
      },
      getInfo: function() {
        return this.name + " " + this.lastname;
      },
      countOfStudents: function() {
        var count = 0;
        for (var stu in University.students) {
          if (University.students[stu].group == this.group) {
            count++;
          }
        }
        return count;
      },
      countOfGroup: function() {
        return this.group.length;
      }
    },
    {
      name: "Samir",
      lastname: "Dadashzade",
      group: ["P507"],
      student: function() {
        for (var stu in University.students) {
          if (University.students[stu].group == this.group) {
            console.log(University.students[stu].getInfo());
          }
        }
      },
      getInfo: function() {
        return this.name + " " + this.lastname;
      },
      countOfStudents: function() {
        var count = 0;
        for (var stu in University.students) {
          if (University.students[stu].group == this.group) {
            count++;
          }
        }
        return count;
      },
      countOfGroup: function() {
        return this.group.length;
      }
    },
    {
      name: "Yolcu",
      lastname: "Nesibli",
      group: ["P508"],
      student: function() {
        for (var stu in University.students) {
          if (University.students[stu].group == this.group) {
            console.log(University.students[stu].getInfo());
          }
        }
      },
      getInfo: function() {
        return this.name + " " + this.lastname;
      },
      countOfStudents: function() {
        var count = 0;
        for (var stu in University.students) {
          if (University.students[stu].group == this.group) {
            count++;
          }
        }
        return count;
      },
      countOfGroup: function() {
        return this.group.length;
      }
    }
  ],

  group: {
    countOfStudents: function() {
      return University.students.length;
    },
    teacherOfGroup: [
      {
        groupName: ["P506", "P507", "P508"],

        groupTeacher: function() {
          for (var t in University.teachers) {
            for (var g in this.groupName) {
              if (University.teachers[t].group == this.groupName[g]) {
                console.log(
                  University.teachers[t].getInfo() + " | " + this.groupName[g]
                );
              }
            }
          }
        }
      }
    ],
    getAvarageScore: function() {
      var groupP506 = 0;
      var countP506 = 0;
      var groupP507 = 0;
      var countP507 = 0;
      var groupAvarage = 0;
      for (var s in University.students) {
        if (University.students[s].group == "P506") {
          countP506++;
          groupP506 += University.students[s].score;
        } else {
          countP507++;
          groupP507 += University.students[s].score;
        }
      }

      var groupA = groupP506 / countP506;
      var groupB = groupP507 / countP507;

      if (groupA > groupB) {
        groupAvarage = groupA;
      } else {
        groupAvarage = groupB;
      }

      return groupAvarage;
    }
  },
  bestOfAll: function() {
    var scores = [];
    var _Students = [];
    for (var stu in University.students) {
      scores.push(University.students[stu].score);
      _Students.push(University.students[stu]);
    }
    var maxScore = scores[0];

    for (var i = 0; i < scores.length; i++) {
      if (scores[i] > maxScore) {
        maxScore = scores[i];
      }
    }

    for (var i = 0; i < _Students.length; i++) {
      if (_Students[i].score == maxScore) {
        return (
          "Student:" +
          " " +
          _Students[i].getInfo() +
          " | " +
          "Teacher:" +
          " " +
          _Students[i].getTeacherName() +
          " | " +
          "Group:" +
          " " +
          _Students[i].group +
          " | " +
          "Score:" +
          " " +
          maxScore
        );
      }
    }
  }
};

console.log(University.bestOfAll());
