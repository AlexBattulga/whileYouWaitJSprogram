var daysUntilMyBirthday = 60;
for (var i = daysUntilMyBirthday; i >= 0; i--) {
    if (i >= 30) {
        console.log('\t', i, 'days until my birthday. Such a long time... :(');
    }else if (i < 30 && i >= 5) {
        console.log('',i, "I'm so excited! ! ! it's getting close");
    }else if (i < 5 && i > 2) {
        console.log('',i, "YEAHHHHH!!!\n");
    }else if (i >= 1) {
        console.log('\t',i,"DAYS UNTIL MY BIRTHDAY");
    }else {
        console.log("\n\tHAPPY BIRTHDAY! ! ! to ME\n");
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
        console.log("\t♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
        console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«\n\n");
    }
}
