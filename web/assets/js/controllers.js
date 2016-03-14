ninjaWorkoutApp.controller('AppCtrl', function($scope){
    // Countdown per set in seconds
    $scope.workoutSetCountdown = 3;

    // Number of sets per workout
    $scope.workoutSetAmount = 4;

    // Summarized countdown in seconds
    $scope.workoutSumCountdown = function(){
        return $scope.workoutSetCountdown * $scope.workoutSetAmount;
    };

    $scope.timerRunning = true;

    $scope.startTimer = function (){
        if(!$scope.timerRunning){
            $scope.timerStopped = false;
            $scope.$broadcast('timer-start');
            $scope.timerRunning = true;
        }
    };

    $scope.pauseTimer = function (){
        if($scope.timerRunning){
            $scope.timerStopped = true;
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
        }
    };

    $scope.stopTimer = function(){
        // TODO: prompt before reset
        $scope.$broadcast('timer-reset');
    }

});

ninjaWorkoutApp.controller('WorkoutSumCtrl', function($scope){
    $scope.$on('timer-stopped', function (event, data){
        if(!$scope.$parent.timerStopped) {
            $scope.$parent.timerStopped = true;
            console.log('Timer Stopped - data = ', event, data);
            $scope.$parent.$broadcast('timer-stop');
        }
    });
});

ninjaWorkoutApp.controller('WorkoutSetCtrl', function($scope){
    $scope.$on('timer-stopped', function (event, data){
        if(!$scope.$parent.timerStopped) {
            console.log('Timer Stopped - data = ', event, data);
            $scope.$broadcast('timer-start');
        }
    });
});