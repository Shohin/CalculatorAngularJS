var app = angular.module ('calculatorApp', []);

app.controller ('OperandsController', function($scope){
	$scope.result = '';
	$scope.operand = 0;
	$scope.operation = '';
	$scope.waitingOperand = 0;
	$scope.waitingOperation = '';
	$scope.isMiddleTypingANumber = false;
	
	$scope.performOperand = function(){
		if ($scope.waitingOperation == '+')
		{
			$scope.operand = parseInt($scope.operand) + parseInt($scope.waitingOperand);
		}
		else if ($scope.waitingOperation == '-')
		{
			$scope.operand = $scope.waitingOperand - $scope.operand;
		}
		else if ($scope.waitingOperation == '*')
		{
			$scope.operand *= $scope.waitingOperand;
		}
		else if ($scope.waitingOperation == '/')
		{
			if ($scope.operand)
			$scope.operand = $scope.waitingOperand / $scope.operand;
		}
		$scope.waitingOperand = $scope.operand;
		$scope.waitingOperation = $scope.operation;
	};
	
	$scope.operandClick = function(op){
		if ($scope.isMiddleTypingANumber == false)
		{
			$scope.isMiddleTypingANumber = true;
			$scope.result = op;
		}
		else
		{
			$scope.result += (op + '');
		}
		$scope.operand = $scope.result;
	};
	
	$scope.operationClick = function(event){
		if ($scope.isMiddleTypingANumber == true)
		{
			$scope.isMiddleTypingANumber = false;
		}
		$scope.operation = event.target.value;
		$scope.performOperand ();
		$scope.result = $scope.operand;
	};
});