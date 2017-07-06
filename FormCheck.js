var strategies = {
    isNonEmpty: function(value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
    minLength: function(value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    maxLength:function(value,length,errorMsg){
    	if (value.length>length) {
    		return errorMsg;
    	}
    },
    isMobile: function(value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    },
    isMail:function(value,errorMsg){
    	var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    	if (!reg.test(value)) {
    		return errorMsg;
    	}
    }
}

var Validator = function() {
    this.cache = [];
}
Validator.prototype.add = function(dom, rules) {
    var self = this;
    for (var i = 0, rule; rule = rules[i++];) {
        (function(rule) {
            console.log(rule);
            var strategyAry = rule.strategy.split(':');
            console.log(strategyAry);
            var errorMsg = rule.errorMsg;

            self.cache.push(function() {
                var strategy = strategyAry.shift();
                strategyAry.unshift(dom.value);
                strategyAry.push(errorMsg);
                console.log(strategyAry);
                return strategies[strategy].apply(dom, strategyAry);
            })
        })(rule)
    }
};
Validator.prototype.start = function() {
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var errorMsg = validatorFunc();
        if (errorMsg) {
            return errorMsg;
        }
    }
}

//以下是使用场景
/*
var registerForm=document.getElementById('registerForm');
		
		var validataFunc=function(){
			var validator=new Validator();
			validator.add(registerForm.userName,[{
				strategy:'isNonEmpty',
				errorMsg:'用户名不能为空'
			},{
				strategy:'minLength:10',
				errorMsg:'用户名长度不能小于10位'
			}]);
			validator.add(registerForm.password,[{
				strategy:'minLength:6',
				errorMsg:'密码长度不能小于6位'
			},{
				strategy:'maxLength:10',
				errorMsg:'密码长度不能大于10位'
			}]);
			validator.add(registerForm.phoneNumber,[{
				strategy:'isMobile',
				errorMsg:'手机号码格式不正确'
			}]);
			validator.add(registerForm.mail,[{
				strategy:'isMail',
				errorMsg:'邮箱格式不正确'
			}])
			var errorMsg=validator.start();
			return errorMsg;
		}
		registerForm.onsubmit=function(){
			var errorMsg=validataFunc();
			if (errorMsg) {
				alert(errorMsg);
				// console.log(errorMsg);
				return false;
			}
		}
*/
