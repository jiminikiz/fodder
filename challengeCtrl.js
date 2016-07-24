// FRONT END
challengeCtrl.completeMainTask = function(res){
    challengeCtrl.currentChallenge.skipped = false;
    $http.post('/api/users/challenges', challengeCtrl.currentChallenge)
       .then(function(res) {
          challengeCtrl.currentChallenge = challengeCtrl.challenges[++challengeIndex]
          challengeCtrl.previousChallenge = challengeCtrl.challenges[challengeIndex-1]
          challengeCtrl.totalPoints = res.data.totalPoints
       })
 }
 challengeCtrl.skipTask = function(res) {
    challengeCtrl.currentChallenge.skipped = true;
    $http.post('/api/users/challenges', challengeCtrl.currentChallenge)
       .then(function(res){
          challengeCtrl.currentChallenge = challengeCtrl.challenges[challengeIndex++]
       })
}
