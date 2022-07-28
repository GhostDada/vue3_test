import { reactive, onMounted, onBeforeUnmount } from "vue";

//获取鼠标坐标的自定义方法
export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    });

    //获取鼠标坐标的方法
    function savePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(event.pageX, event.pageY);
    }

    //生命周期钩子 
    onMounted(() => {
        window.addEventListener("click", savePoint);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint);
    });

    return point;
}