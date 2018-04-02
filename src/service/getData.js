import ajax from '../config/ajax'

/**
 * 获取首页默认地址
 */

export const getBanners = () => ajax('/test/php/api.php', {}, 'POST')
