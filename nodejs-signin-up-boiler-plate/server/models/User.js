const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10 //salt생성(saltRounds 필요-salt의 글자 수)->비밀번호 암호화
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
      type: String,
      maxlength: 50,
    },
    email: {
      type: String,
      trim: true,
      unique: 1,
    },
    password: {
      type: String,
      minlength: 5,
    },
    lastname: {
      type: String,
      maxlength: 50,
    },
    role: {
      type: Number,
      default: 0,
    },
    image: String,
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
  });

  userSchema.pre('save', function(next){
    //비밀번호 암호화
    var user = this;

    if(user.isModified('password')){

    bcrypt.genSalt(saltRounds, function(err, salt) {
       
        if(err) return next(err)

        bcrypt.hash(user.password,salt, function(err,hash){
            if(err) return next(err);
            user.password = hash;
            console.log(user.password)
            next();
        })
    })
} else{
    next()
}
})

userSchema.methods.comparePassword = function(plainPassword, cb){
    //plainPassword 1234567 암호화된 비밀번호와 같은지
   bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    })
}

userSchema.methods.generateToken = function(cb){
   var user = this;
    //jsonwedtoken을 이용해서 token생성
   var token =  jwt.sign(user._id.toHexString(),'secretToken') //token생성
   user.token = token;
   user.save(function(err, user){
    if(err ) return cb(err)
    cb(null,user);
   })
   
}

userSchema.statics.findByToken = function(token,cb){
    var user = this;
    //토큰을 디코드 한다.
    jwt.verify(token,'secretToken',function(err,decode){
        //유저 아이디를 이용해서 유저를 찾은 다음에
        //클라이언트에서 가져온 토큰과 디비에 보관된 토큰이 일치하는지 확인

        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
}

const User = mongoose.model('user',userSchema)

  module.exports = {User}