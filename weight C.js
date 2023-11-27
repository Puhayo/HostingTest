 <script>
        function calculateDays() {
            // 입력값 가져오기
            var currentWeight = parseFloat(document.getElementById("currentWeight").value);
            var targetWeight = parseFloat(document.getElementById("targetWeight").value);
            var startDate = new Date(document.getElementById("startDate").value);
            var endDate = new Date(document.getElementById("endDate").value);

            // 날짜 차이 계산
            var timeDiff = endDate - startDate;
            var daysDiff = timeDiff / (1000 * 3600 * 24);

            // 하루 소비 칼로리 계산 (예시로 몸무게 차이 1kg당 7700 칼로리로 계산)
            var dailyCalories = (currentWeight - targetWeight) * 7700 / daysDiff;

            // 주당 적정 감량 계산
            var weeklyLoss = (currentWeight - targetWeight) / (daysDiff / 7);

            // 결과를 입력 폼에 표시
            document.getElementById("dailyCalories").value = dailyCalories.toFixed(2);
            document.getElementById("weeklyLoss").value = weeklyLoss.toFixed(2);
        }
</script>