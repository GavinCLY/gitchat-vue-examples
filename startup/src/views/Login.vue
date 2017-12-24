<template>
  <div>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />

    <!-- 文件上传 -->
    <input type="file" @change="upload">
  </div>
</template>

<script>
import userSrv from '../api/user'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const { username, password } = this
      userSrv
        .login({ username, password })
        .then(rep => {
          
        })
    },
    upload (e) {
      const file = e.target.files[0];
      var formData = new FormData();
      formData.append('file', file);
      axios({
        url: '/file/upload', // 填写自己的文件上传接口api
        method: 'post',
        data: formData,  // 表单数据
        onUploadProgress (progressEvent) {
          // 接受上传进度，可以用于处理上传进度条等逻辑
          console.log(progressEvent)
        }
      })
    }
  }
}
</script>
