<?php

// lang/ko/validation.php  <-- 경로 확인!

return [
    // ... (이전 답변에서 보여드린 내용과 동일하게 수정) ...
    'email' => '유효한 이메일 주소를 입력해주세요.',

    'custom' => [
        'name' => [
            'required' => '성명을 입력하세요.',
        ],
        'email' => [
            'required' => '기본 이메일 주소로 사용할 유효한 이메일 주소를 입력하십시오.',

        ],
        'password' => [
            'required' => '비밀번호를 입력하세요.',
        ],
        'password_confirmation' => [
            'required' => '비밀번호 확인을 입력하세요.',
        ],
    ],

    'attributes' => [
        'name' => '성명',
        'email' => '이메일 주소',
        'password' => '비밀번호',
        'password_confirmation' => '비밀번호 확인',
    ],
];
