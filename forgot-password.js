
// 忘记密码功能模块
(function() {
    // 创建忘记密码模态框
    window.createForgotPasswordModal = function() {
        const modalHTML = `
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-xl p-6 w-full max-w-md mx-4">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold">忘记密码</h3>
                        <button class="close-modal text-gray-400 hover:text-gray-600">
                            <i class="fa-solid fa-times"></i>
                        </button>
                    </div>

                    <div id="forgotPasswordStep1">
                        <p class="text-gray-600 mb-4">请输入您的注册邮箱，我们将向您发送验证码以重置密码。</p>

                        <form id="forgotPasswordForm">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-medium mb-2" for="resetEmail">
                                    邮箱地址
                                </label>
                                <input type="email" id="resetEmail" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                    placeholder="请输入注册邮箱">
                            </div>

                            <button type="submit"
                                class="w-full bg-brand hover:bg-brand/90 text-white font-medium py-3 rounded-lg transition">
                                发送验证码
                            </button>
                        </form>
                    </div>

                    <div id="forgotPasswordStep2" class="hidden">
                        <p class="text-gray-600 mb-4">验证码已发送到您的邮箱，请输入验证码并设置新密码。</p>

                        <form id="resetPasswordForm">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-medium mb-2" for="verificationCode">
                                    验证码
                                </label>
                                <input type="text" id="verificationCode" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                    placeholder="请输入验证码">
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-medium mb-2" for="newPassword">
                                    新密码
                                </label>
                                <input type="password" id="newPassword" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                    placeholder="请输入新密码（至少6位）">
                            </div>

                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-medium mb-2" for="confirmNewPassword">
                                    确认新密码
                                </label>
                                <input type="password" id="confirmNewPassword" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                                    placeholder="请再次输入新密码">
                            </div>

                            <button type="submit"
                                class="w-full bg-brand hover:bg-brand/90 text-white font-medium py-3 rounded-lg transition">
                                重置密码
                            </button>
                        </form>
                    </div>

                    <div class="mt-4 text-center">
                        <p class="text-gray-600 text-sm">
                            <button class="text-brand hover:text-brand/80 font-medium back-to-login">
                                返回登录
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        `;

        // 添加到页面
        const modalContainer = document.createElement('div');
        modalContainer.id = 'forgotPasswordModal';
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer);

        // 关闭按钮事件
        modalContainer.querySelector('.close-modal').addEventListener('click', function() {
            document.body.removeChild(modalContainer);
        });

        // 点击背景关闭
        modalContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                document.body.removeChild(modalContainer);
            }
        });

        // 返回登录
        modalContainer.querySelector('.back-to-login')?.addEventListener('click', function() {
            document.body.removeChild(modalContainer);
            createLoginModal();
        });

        // 发送验证码表单提交
        modalContainer.querySelector('#forgotPasswordForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('resetEmail').value;

            // 检查邮箱是否存在
            const user = UserSystem.users.find(u => u.email === email);
            if (!user) {
                showNotification('该邮箱未注册', 'error');
                return;
            }

            // 生成验证码
            const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

            // 将验证码存储到localStorage，模拟发送到邮箱
            localStorage.setItem('password_reset_code', verificationCode);
            localStorage.setItem('password_reset_email', email);

            // 模拟发送验证码到邮箱
            console.log(`验证码已发送到 ${email}: ${verificationCode}`);

            // 显示提示
            showNotification(`验证码已发送到您的邮箱: ${verificationCode}`, 'success');

            // 切换到第二步
            document.getElementById('forgotPasswordStep1').classList.add('hidden');
            document.getElementById('forgotPasswordStep2').classList.remove('hidden');
        });

        // 重置密码表单提交
        modalContainer.querySelector('#resetPasswordForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const verificationCode = document.getElementById('verificationCode').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmNewPassword = document.getElementById('confirmNewPassword').value;
            const email = localStorage.getItem('password_reset_email');
            const storedCode = localStorage.getItem('password_reset_code');

            // 验证验证码
            if (verificationCode !== storedCode) {
                showNotification('验证码错误', 'error');
                return;
            }

            // 验证密码
            if (newPassword.length < 6) {
                showNotification('密码长度至少为6位', 'error');
                return;
            }

            if (newPassword !== confirmNewPassword) {
                showNotification('两次输入的密码不一致', 'error');
                return;
            }

            // 重置密码
            const user = UserSystem.users.find(u => u.email === email);
            if (user) {
                user.password = newPassword;
                UserSystem.saveUsers();

                // 清除验证码
                localStorage.removeItem('password_reset_code');
                localStorage.removeItem('password_reset_email');

                // 关闭模态框
                document.body.removeChild(modalContainer);

                // 显示成功提示
                showNotification('密码重置成功，请使用新密码登录', 'success');

                // 打开登录模态框
                createLoginModal();
            } else {
                showNotification('用户不存在', 'error');
            }
        });
    };
})();
