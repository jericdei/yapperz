<?php

namespace App\Enums;

use App\Traits\ArrayableEnum;

enum NotificationType: string
{
    use ArrayableEnum;

    case FRIEND_REQUEST = 'friend_request';
    case POST_COMMENT = 'post_comment';
    case POST_LIKE = 'post_like';
}
